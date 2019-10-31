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


def trainSVM(D, stepSize, lmda, ans, iterMax):
    
#     print("trainSVM started!")
    
    numFeature = D.shape[1]
#     print("numFeature = %d" %numFeature)
#     print(np.zeros(5))
    w = np.zeros(numFeature)
    b = 0
    tol = pow(10, -6)

    for iter in range(1, iterMax):
        g = np.zeros(numFeature)
        gb = 0
         
        for i in range(0, len(D)):

            tempD = np.array(D[i]).ravel()
            
            if((ans[i] * ( np.dot(w, tempD) + b )) <= 1):
                g += (ans[i] * tempD)
                gb += ans[i]

        g += ((-1 * lmda) * w)
        
#         newW = sumList(w, multList(stepSize, g))
        newW = w + (stepSize * g)
        diff = abs(np.linalg.norm(newW - w))
#         print(diff)
#         print("# of iter :", iter)
        if(diff < tol):
            break
        w = newW
        b = b + (stepSize * gb)
    
    
    return w, b


def resultTestingSVM(D, w, b, ans):
     
    predictList = []
      
    for i in range(0, len(D)):
        tempD = np.array(D[i]).ravel()
#         print((np.dot(w, tempD) + b))
        if((np.dot(w, tempD) + b) > 0):
            predictList.append(1)
        else:
            predictList.append(-1)
             
    correctCnt = 0
    for i in range(0, len(ans)):
        if(predictList[i] == ans[i]):
            correctCnt += 1
            
#     print("Accuracy = ", float(correctCnt)/float(len(ans)))
    return float(correctCnt)/float(len(ans))
    
    
    

def getAnsSVM(list):
    ans = []
    
    for e in list:
        if(e == 0):
            ans.append(-1)
        else:
            ans.append(1)
            
    return ans


def runSVM(dataTrain, trainAns, dataTest, testAns, iter):
    
#     print((iter + 1)," th SVM started!")
    
    stepSize = 0.5
    lmda = 0.01
    iterMax = 500

    D = np.matrix(dataTrain).astype(np.float32)
    Dtest = np.matrix(dataTest).astype(np.float32)
    trainAns = getAnsSVM(np.array(trainAns).astype(np.float32))
    testAns  = getAnsSVM(np.array(testAns).astype(np.float32))
#     print(trainAns)
     
    w, b = trainSVM(D, stepSize, lmda, trainAns, iterMax)
    
    
    accTrain = resultTestingSVM(D, w, b, trainAns)
    accTest = resultTestingSVM(Dtest, w, b, testAns)
    
#     print("Training Accuracy: ", accTrain)
#     print("Testing Accuracy: ", accTest)
#     print("---------------------------------------\n\n")
    return accTrain, accTest
    
        
def getSigmoid(num):
    sig = (1.0 / (1 + np.exp(-1.0 * num)))
    return sig



    
    
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

    preProcessNBC.preProcessing("dating-full.csv")

    dataOrigin = pd.read_csv("trainingSet.csv")
    dataOriginNBC = pd.read_csv("trainingSet_NBC.csv") 
    
    del dataOrigin["Unnamed: 0"]
    del dataOriginNBC["Unnamed: 0"]
 
 
 
    t_frac = [0.025, 0.05, 0.075, 0.1, 0.15, 0.2]
    
    trainAccuracyNBC = []
    testAccuracyNBC = []
    
    trainAccuracySVM = []
    testAccuracySVM = []
    
    trainAccuracyLR = []
    testAccuracyLR = []
    
     
    for i in range(0, len(t_frac)):
        trainAccuracyNBC.append([])
        testAccuracyNBC.append([])
        trainAccuracySVM.append([])
        testAccuracySVM.append([])
        trainAccuracyLR.append([])
        testAccuracyLR.append([])
    
    for fc in range(0, len(t_frac)):
        
        for iter in range(0, 10):
            dataTrain, ansTraint, dataTest, ansTest = divParts(iter, dataOrigin, t_frac[fc])
            accTrainSVM, accTestSVM = runSVM(dataTrain, ansTraint, dataTest, ansTest, iter)
            trainAccuracySVM[fc].append(accTrainSVM)
            testAccuracySVM[fc].append(accTestSVM)
    
    trainAccuracySVM_M = []
    testAccuracySVM_M = []
    std_eSVM1 = []
    std_eSVM2 = []
    

    for i in range(0, len(t_frac)):
        trainAccuracySVM_M.append(np.mean(trainAccuracySVM[i]))
        testAccuracySVM_M.append(np.mean(testAccuracySVM[i]))
        std_eSVM1.append(np.std(trainAccuracySVM[i])/math.sqrt(10))
        std_eSVM2.append(np.std(testAccuracySVM[i])/math.sqrt(10))

    graphLearning(trainAccuracySVM_M, testAccuracySVM_M, std_eSVM1, std_eSVM2, "SVM")
    
        
