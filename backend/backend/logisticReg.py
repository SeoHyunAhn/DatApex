import numpy as np 
import pandas as pd
import random
import sys
import math
import matplotlib.pyplot as plt

def divParts(iter, dataOrigin, setFrac):
    
    dataTrain = {}
    dataTest = {}
    
    if(iter == 0):
        for key in dataOrigin:
            dataTrain.update({key:dataOrigin[key][520:5200]})
            dataTest.update({key:dataOrigin[key][0:520]})
        
    elif(iter == 9):
        for key in dataOrigin:
            dataTrain.update({key:dataOrigin[key][0:4680]})
            dataTest.update({key:dataOrigin[key][4680:5200]})

    else:
        for key in dataOrigin:
            temp1 = list(dataOrigin[key][0:(520 * iter)])
            temp2 = list(dataOrigin[key][(520 * (iter+1)):5200])
            dataTrain.update({key:(temp1 + temp2)})
            dataTest.update({key:dataOrigin[key][(520 * iter):(520 * (iter+1))]})
    
    dataTrain = pd.DataFrame(data=dataTrain)
    dataTrain = dataTrain.sample(random_state=32, frac=setFrac)
    dataTest = pd.DataFrame(data=dataTest)
    
    ansTraint = dataTrain["decision"]
    ansTest = dataTest["decision"]
    
    del dataTrain["decision"]
    del dataTest["decision"]
    
    return dataTrain, ansTraint, dataTest, ansTest


def get_dataMatrix(data):
    
    D = []
    
    for i in range(0, len(data["age"])):
        temp = []
        for key in data:
            temp.append(data[key][i])
        D.append(temp)

#     print("madeLen ",len(D))
#     for t in D[0]:
#         print(t)
    
    return D


def sumList(list1, list2):

    sumArr = []
        
    for i in range(0, len(list1)):
        sumArr.append(list1[i] + list2[i])

    return sumArr

def multList(m, list1):
    
    multArr = []
    
    for i in range(0, len(list1)):
        multArr.append(m * list1[i])

    return multArr


def get_numFeature(data):
    
    numFeature = 0
    for key in data:
        numFeature += 1
    
    return numFeature

def initList(numFeature):
    
    initList = []
    for i in range(0, numFeature):
        initList.append(0.0)

    return initList

    

def getSigmoid(num):
    sig = (1.0 / (1 + np.exp(-1.0 * num)))
    return sig


def logistic_regression(dataTrain, ans, iterMax, stepSize, lmda):
   
   
    dataT = np.hstack((np.ones((dataTrain.shape[0], 1)), dataTrain))
        
    w = np.zeros(dataT.shape[1])
    tol = pow(10, -6)
    
    for iter in range(0, iterMax):
        calcScore = np.dot(dataT, w)
        calcScore = np.array(calcScore).ravel()

        predictions = getSigmoid(calcScore)
        error = ans - predictions
        
        g = np.dot(dataT.T, error)
        g = np.array(g).ravel()
        
        dw = np.zeros(dataT.shape[1])
        for j in range(1, dataT.shape[1]):
            dw[j]= (g[j] + lmda*w[j])
        
        newW = w - (stepSize * dw)
        diff = abs(np.linalg.norm(newW - w))
        
#         print("# of iter: ", iter)
    
        if(diff < tol):
            break
        
        w += stepSize * g
        
    return w


def resultTestingLR(w, D, ans):
    
    
    dataWithIntercept = np.hstack((np.ones((D.shape[0], 1)), D))
    calcScore = np.dot(dataWithIntercept, w)
    calcScore = np.array(calcScore).ravel()
#     print(calcScore)
    predict = np.round(getSigmoid(calcScore))
    
    cntCorrect = 0
    
    for i in range(0, len(predict)):
        if(ans[i] == predict[i]):
            cntCorrect += 1
    
#     print("Accuracy Train: ", float(cntCorrect)/float(len(ans)))    
    return float(cntCorrect)/float(len(ans))

def runLR(dataTrain, trainAns, dataTest, testAns, iter):
#     print((iter + 1),"th Logistic Regression started!")
    
    
    dataTrain = np.matrix(dataTrain).astype(np.float32)
    trainAns = np.array(trainAns).astype(np.float32)
     
    dataTest = np.matrix(dataTest).astype(np.float32)
    testAns = np.array(testAns).astype(np.float32)

#     print(dataTrain)
#     print(trainAns)
    
    w = logistic_regression(dataTrain, trainAns, iterMax = 500, stepSize = 0.01, lmda = 0.01)
# 
    accTrain = resultTestingLR(w, dataTrain, trainAns)
    accTest = resultTestingLR(w, dataTest, testAns)
 
#     print("Training Accuracy: ", accTrain)
#     print("Testing Accuracy: ", accTest)
#     print("---------------------------------------")
    return accTrain, accTest

    
    
def graphLearning(accTrain, accTest, errorTrain, errorTest, cfName):

    space = []
    frac = [0.025, 0.05, 0.075, 0.1, 0.15, 0.2]
    
    for i in range(0, len(frac)):
        space.append(4680 * frac[i])
    
    space[-1] += 100
    
    plt.errorbar(space, accTrain, c='green', linewidth=1, label='Train Accuracy', yerr=errorTrain)
    plt.errorbar(space, accTest, c='red', linewidth=1, label='Test Accuracy', yerr=errorTest)
    plt.grid()
    plt.title("Learning Curve of " + cfName)
    plt.xlabel("Training Set Size")
    plt.ylabel("Accuracy Score")
    plt.xlim(0, (4680*0.2)+100)
    plt.ylim(0, 1.1)
    plt.legend()
#     plt.show()
    plt.savefig(cfName + "LearningCurve.png")    
    plt.clf()



if __name__ == '__main__':
    
#     trainingPath = sys.argv[1]
#     testingPath = sys.argv[2]
#     inputMode = sys.argv[3] # 0 == Logistic Reg, 1 == SVM

    dataOrigin = pd.read_csv("trainingSet.csv")
    del dataOrigin["Unnamed: 0"]


 
    t_frac = [0.025, 0.05, 0.075, 0.1, 0.15, 0.2]
    
    trainAccuracyLR = []
    testAccuracyLR = []
    
     
    for i in range(0, len(t_frac)):
        trainAccuracyLR.append([])
        testAccuracyLR.append([])
    
    for fc in range(0, len(t_frac)):

        for iter in range(0, 10):
            dataTrain, ansTraint, dataTest, ansTest = divParts(iter, dataOrigin, t_frac[fc])
            accTrainLR, accTestLR = runLR(dataTrain, ansTraint, dataTest, ansTest, iter)

            trainAccuracyLR[fc].append(accTrainLR)
            testAccuracyLR[fc].append(accTestLR)
            
#        print("frac = %s Done." %(str(round(t_frac[fc], 3))))



    
    trainAccuracyLR_M = []
    testAccuracyLR_M = []
    std_eLR1 = []
    std_eLR2 = []


    for i in range(0, len(t_frac)):
        trainAccuracyLR_M.append(np.mean(trainAccuracyLR[i]))
        testAccuracyLR_M.append(np.mean(testAccuracyLR[i]))
        std_eLR1.append(np.std(trainAccuracyLR[i])/math.sqrt(10))
        std_eLR2.append(np.std(testAccuracyLR[i])/math.sqrt(10))

    graphLearning(trainAccuracyLR_M, testAccuracyLR_M, std_eLR1, std_eLR2, "LR")
    
        
