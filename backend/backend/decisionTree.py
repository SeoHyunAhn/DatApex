import pandas as pd
import math
import random
import sys
import matplotlib.pyplot as plt
import numpy as np
import os
from backend.settings import BASE_DIR

depthLimit = 0
exampleLimit = 0
numFeature = 0

# def getFrac(a, n):
#     k, m = divmod(len(a), n)
#     samples = []
#     
#     for i in range(n):
#         samples.append(a[i * k + min(i, m):(i + 1) * k + min(i + 1, m)])
#     
#     return samples

def getX(data):
    
    X = []
    
    for i in range(0, len(data["gender"])):
        temp = []
        for key in data:
            temp.append(data[key][i])
        X.append(temp)
        
    return X


def getFrac(data):
    
    temp = []
    X = []
    for key in data:
        temp.append(list(data[key]))

    
    for i in range(0, len(temp[0])):
        tmp = []
        for j in range(0, len(temp)):
            tmp.append(temp[j][i])
        X.append(tmp)

    return X


def calcGini(leftB, rightB):

#     time.sleep(1)
    lenL = float(len(leftB))
    lenR = float(len(rightB))
    
    totalN = lenL + lenR
    giniVal = 0
    if(lenL > 0):
        temp = 0
        dicOut = {0:0, 1:0}
        
        for r in leftB:
            dicOut[r[-1]] += 1
        
        temp += pow((dicOut[0]/lenL), 2)
        temp += pow((dicOut[1]/lenL), 2)

        giniVal += (1.0 - temp) * (lenL / totalN)
    
    if(lenR > 0):

        temp = 0
        dicOut = {0:0, 1:0}
        
        for r in rightB:
            dicOut[r[-1]] += 1
        
        temp += pow((dicOut[0]/lenR),2)
        temp += pow((dicOut[1]/lenR),2)

        giniVal += (1.0 - temp) * (lenR / totalN)
        
    return giniVal


def subSplit(data):
    
#     giniDic = {}
    iterN = len(data[0]) - 1
    optimalB = {'L':0, 'R':0, "idx":0, "val":0}
    optimalGini = math.inf
    
    
    for i in range(0, iterN):

#         giniDic.update({i:[-1,-1]})
        giniDic = {i:[-1,-1]}
        for d in data:
            if(giniDic[i][d[i]] == -1):
                
                leftB = []
                rightB = []
                
                for s in data:
                    if s[i] < d[i]:
                        leftB.append(s)
                    else:
                        rightB.append(s)
                
                gini = calcGini(leftB, rightB)
                giniDic[i][d[i]] = gini
                
            if(giniDic[i][d[i]] < optimalGini):
                optimalGini = giniDic[i][d[i]]
                optimalB['L'] = leftB
                optimalB['R'] = rightB
                optimalB["idx"] = i
                optimalB["val"] = d[i]
                
            if((giniDic[i][0] != -1) and (giniDic[i][1] != -1)):
                break
                
    return optimalB


def stopGrow(branch):
    
    dicOut = {0:0, 1:0}
    
    for r in branch:
        dicOut[r[-1]] += 1
    
    if(dicOut[0] >= dicOut[1]):
        return 0

    return 1





def getSplit(node, depth = 0):
    
    left = node['L']
    right = node['R']

    stopFlag = 0

    if(depth >= depthLimit):
        node["LBranch"] = stopGrow(left)
        node["RBranch"] = stopGrow(right)
        stopFlag += 1
    elif((len(left) == 0) or(len(right) == 0)):
        stopResult = stopGrow(left + right)
        node["LBranch"] = stopResult
        node["RBranch"] = stopResult
        stopFlag += 1
        
    if(stopFlag == 0):

        if len(left) <= exampleLimit:
            node["LBranch"] = stopGrow(left)
        else:
            node["LBranch"] = subSplit(left)
            getSplit(node["LBranch"], depth+1)

        if len(right) <= exampleLimit:
            node["RBranch"] = stopGrow(right)
        else:
            node["RBranch"] = subSplit(right)
            getSplit(node["RBranch"], depth+1)




def predict(node, data):
     
    while(1):
        if(data[node["idx"]] < node["val"]):
            if isinstance(node["LBranch"], int):
                return  node["LBranch"]
            else:
                node = node["LBranch"]
        else:
            if isinstance(node["RBranch"], int):
                return node["RBranch"]
            else:
                node = node["RBranch"]


def getAccDT(dataSet, tree):
    
    data = dataSet[0]
    ans = dataSet[1]
    
    for x in data:
        x[-1] = None
    
    correct = 0
    for i in range(0,len(data)):
#         print(data[i])
        pred = predict(tree, data[i])
#         print(pred)
        if(pred == ans[i]):
            correct += 1

#     print("@@@@@@")
    return float(correct)/float(len(ans))


def getAcc(dataSet, trees):
    
    data = dataSet[0]
    ans = dataSet[1]
    
    for x in data:
        x[-1] = None
    
    correct = 0
    for i in range(0, len(data)):
        
        dicOut = {0:0, 1:0}
        
        for t in trees:
            dicOut[predict(t, data[i])] += 1
        
        pred = -1
#         print(dicOut[0], " --- ", dicOut[1])
        if(dicOut[0] > dicOut[1]):
            pred = 0
        else:
            pred = 1
        
        if(pred == ans[i]):
            correct += 1

#     print("@@@@@@")
    return float(correct)/float(len(ans))


def runDT(trainData, testPath, depthLim, exampleLim):
    
    depthL = depthLim
    exampleL = exampleLim
    
    
    global depthLimit
    global exampleLimit
    
    depthLimit = depthL
    exampleLimit = exampleL
    
    #  Beginning of Training  
    train = pd.read_csv(trainData)
    del train["Unnamed: 0"]
    Ytrain = train["decision"]
#     del train["decision"]
    Xtrain = getX(train)
    test = pd.read_csv(testPath)
    del test["Unnamed: 0"]
    Ytest = test["decision"]
#     del test["decision"]
    Xtest = getX(test)
    
    train = None
    test = None
    
    trainSet = [Xtrain, Ytrain]
    testSet = [Xtest, Ytest]
    
#     print(len(Xtest[1]))
    
    print("DT training!")
    d_Tree = subSplit(Xtrain)
    getSplit(d_Tree)
    
    trainAcc = getAccDT(trainSet, d_Tree)
    testAcc = getAccDT(testSet, d_Tree)
    
    
    print("---------------------------")
    print("Training Accuracy DT:", round(trainAcc, 2))
    print("Testing Accuracy DT:", round(testAcc, 2))
    
    # print("Check: ")
    # print(float(100*round(trainAcc, 2)))

    plt.subplot(211)
    plt.plot([25, 50, 75, 100], [float(25*round(trainAcc, 2)), float(50*round(trainAcc, 2)), float(75*round(trainAcc, 2)), float(100*round(trainAcc, 2))])
    plt.ylabel('Testing Accuracy')
    plt.subplot(212)
    plt.plot([25, 50, 75, 100], [float(25*round(testAcc, 2)), float(50*round(testAcc, 2)), float(75*round(testAcc, 2)), float(100*round(testAcc, 2))])
    plt.ylabel('Testing Accuracy')
    plt.xlabel('Number Of Inputs')
    save_path = os.path.join(BASE_DIR, 'backend/decisionTree_result.png') 
    plt.savefig(save_path)
#  End of Testing 



if __name__ == '__main__':
    
    
    trainingDataFilename = "trainingSetT.csv"
    testDataFilename = "testSetT.csv"
    modelIdx = 3

#    trainingDataFilename = sys.argv[1]
#    testDataFilename = sys.argv[2]
    runDT(trainingDataFilename, testDataFilename)

#     print(trainingDataFilename)
#     print(testDataFilename)
#     print(modelIdx)
