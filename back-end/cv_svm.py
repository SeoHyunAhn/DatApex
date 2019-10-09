import numpy as np 
import pandas as pd
import random
import sys
import preProcessNBC
import runNBC
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


def divPartsNBC(iter, dataOrigin, setFrac):
    
    dataTrain = {}
    dataTest = {}
    
    if(iter == 0):
        for key in dataOrigin:
            dataTrain.update({key:list(dataOrigin[key][520:5200])})
            dataTest.update({key:list(dataOrigin[key][0:520])})
        
    elif(iter == 9):
        for key in dataOrigin:
            dataTrain.update({key:list(dataOrigin[key][0:4680])})
            dataTest.update({key:list(dataOrigin[key][4680:5200])})

    else:
        for key in dataOrigin:
            temp1 = list(dataOrigin[key][0:(520 * iter)])
            temp2 = list(dataOrigin[key][(520 * (iter+1)):5200])
            dataTrain.update({key:(temp1 + temp2)})
            dataTest.update({key:dataOrigin[key][(520 * iter):(520 * (iter+1))]})
    
    dataTrain = pd.DataFrame(data=dataTrain)
    dataTrain = dataTrain.sample(random_state=32, frac=setFrac)
    dataTest = pd.DataFrame(data=dataTest)
    
    dataTrainFianl = {}
    dataTestFianl = {}
    for key in dataTrain:
        temp1 = list(dataTrain[key])
        temp2 = list(dataTest[key])
        dataTrainFianl.update({key:temp1})
        dataTestFianl.update({key:temp2})
        
    dataTrainFianl = pd.DataFrame(data=dataTrainFianl)
    dataTestFianl = pd.DataFrame(data=dataTestFianl)
    
    
#     print("@@@@@@@@@@@  ",dataTestFianl["age"][0])
    
    return dataTrainFianl, dataTestFianl


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

    
    
def graphLearning(A, B, errorA, errorB, cfName):

    space = []
    
    frac = [0.025, 0.05, 0.075, 0.1, 0.15, 0.2]
    
    for i in range(0, len(frac)):
        space.append(4680 * frac[i])
    
    space[-1] += 100
 
    print("--------------")
    print(cfName)
    print(A)
    print(B)
    print("===============")
    
 
    plt.errorbar(space, A, c='green', linewidth=1, label='Train Accuracy', yerr=errorA)
    plt.errorbar(space, B, c='red', linewidth=1, label='Test Accuracy', yerr=errorB)
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

    print("cv.py Started!")
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
        
        print("frac = %s running!" %(str(round(t_frac[fc], 3))))
        
        for iter in range(0, 10):
            dataTrainNBC, dataTestNBC = divPartsNBC(iter, dataOriginNBC, t_frac[fc])
            dataTrain, ansTraint, dataTest, ansTest = divParts(iter, dataOrigin, t_frac[fc])
                   
            accTrainNBC, accTestNBC = runNBC.nbc(dataTrainNBC, dataTestNBC, iter)
            accTrainLR, accTestLR = runLR(dataTrain, ansTraint, dataTest, ansTest, iter)
            accTrainSVM, accTestSVM = runSVM(dataTrain, ansTraint, dataTest, ansTest, iter)
            
            trainAccuracyNBC[fc].append(accTrainNBC)
            trainAccuracyLR[fc].append(accTrainLR)
            trainAccuracySVM[fc].append(accTrainSVM)
            
            testAccuracyNBC[fc].append(accTestNBC)
            testAccuracyLR[fc].append(accTestLR)
            testAccuracySVM[fc].append(accTestSVM)
            
        print("frac = %s Done." %(str(round(t_frac[fc], 3))))
    
    
    
    trainAccuracyNBC_M = []
    testAccuracyNBC_M = []
    std_eNBC1 = []
    std_eNBC2 = []
    
    trainAccuracyLR_M = []
    testAccuracyLR_M = []
    std_eLR1 = []
    std_eLR2 = []
    
    trainAccuracySVM_M = []
    testAccuracySVM_M = []
    std_eSVM1 = []
    std_eSVM2 = []
    
    
    print()
    for i in range(0, len(t_frac)):
        print("When r_frac == %s" %(str(round(t_frac[i], 3))))
        print("----------------------------------------------------------")
        print("Average training accuracy of NBC = ", np.mean(trainAccuracyNBC[i]))
        trainAccuracyNBC_M.append(np.mean(trainAccuracyNBC[i]))
        print("Average testing accuracy of NBC = ", np.mean(testAccuracyNBC[i]))
        testAccuracyNBC_M.append(np.mean(testAccuracyNBC[i]))
        print("Training Std Error of NBC = ", np.std(trainAccuracyNBC[i])/math.sqrt(10))
        std_eNBC1.append(np.std(trainAccuracyNBC[i])/math.sqrt(10))
        print("Testing Std Error of NBC = ", np.std(testAccuracyNBC[i])/math.sqrt(10))
        std_eNBC2.append(np.std(testAccuracyNBC[i])/math.sqrt(10))
        print()
        print("Average training accuracy of LR = ", np.mean(trainAccuracyLR[i]))
        trainAccuracyLR_M.append(np.mean(trainAccuracyLR[i]))
        print("Average testing accuracy of LR = ", np.mean(testAccuracyLR[i]))
        testAccuracyLR_M.append(np.mean(testAccuracyLR[i]))
        print("Training Std Error of LR = ", np.std(trainAccuracyLR[i])/math.sqrt(10))
        std_eLR1.append(np.std(trainAccuracyLR[i])/math.sqrt(10))
        print("Testing Std Error of LR = ", np.std(testAccuracyLR[i])/math.sqrt(10))
        std_eLR2.append(np.std(testAccuracyLR[i])/math.sqrt(10))
        print()
        print("Average training accuracy of SVM = ", np.mean(trainAccuracySVM[i]))
        trainAccuracySVM_M.append(np.mean(trainAccuracySVM[i]))
        print("Average testing accuracy of SVM = ", np.mean(testAccuracySVM[i]))
        testAccuracySVM_M.append(np.mean(testAccuracySVM[i]))
        print("Training Std Error of SVM = ", np.std(trainAccuracySVM[i])/math.sqrt(10))
        std_eSVM1.append(np.std(trainAccuracySVM[i])/math.sqrt(10))
        print("Testing Std Error of SVM = ", np.std(testAccuracySVM[i])/math.sqrt(10))
        std_eSVM2.append(np.std(testAccuracySVM[i])/math.sqrt(10))
        print("===========================================================")
        print()
        
        
    graphLearning(trainAccuracyNBC_M, testAccuracyNBC_M, std_eNBC1, std_eNBC2, "NBC")
    graphLearning(trainAccuracyLR_M, testAccuracyLR_M, std_eLR1, std_eLR2, "LR")
    graphLearning(trainAccuracySVM_M, testAccuracySVM_M, std_eSVM1, std_eSVM2, "SVM")
    
        