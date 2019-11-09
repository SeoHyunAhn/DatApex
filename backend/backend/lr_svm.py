import numpy as np 
import pandas as pd
import sys


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
    
#    print("trainSVM started!")

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
    
#     print("Accuracy = ",float(correctCnt)/float(len(ans)))
    return float(correctCnt)/float(len(ans))
    
    
    

def getAnsSVM(list):
    ans = []
    
    for e in list:
        if(e == 0):
            ans.append(-1)
        else:
            ans.append(1)
            
    return ans


def runSVM(trainingPath, testingPath, stepSize, lmda, iterMax):
    print("SVM started!")
    
    dataTrain = pd.read_csv(trainingPath)
    trainAns = getAnsSVM(dataTrain["decision"])
    dataTest = pd.read_csv(testingPath)
    testAns = getAnsSVM(dataTest["decision"])
    
#     print(trainAns)
#     print(testAns)
    
    del dataTrain["Unnamed: 0"]
    del dataTrain["decision"]
    
    del dataTest["Unnamed: 0"]
    del dataTest["decision"]

    D = np.matrix(dataTrain).astype(np.float32)
    Dtest = np.matrix(dataTest).astype(np.float32)
#     print(D.shape)
    w, b = trainSVM(D, stepSize, lmda, trainAns, iterMax)
    
    accTrain = round(resultTestingSVM(D, w, b, trainAns), 2)
    accTest = round(resultTestingSVM(Dtest, w, b, testAns), 2)
    
    print("Training Accuracy: ", accTrain)
    print("Testing Accuracy: ", accTest)
    
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

def runLR(trainingPath, testingPath, stepSize, lmda, iterMax):
    print("LR started!")
    
    dataTrain = pd.read_csv(trainingPath)
    trainAns = dataTrain["decision"]
    dataTest = pd.read_csv(testingPath)
    testAns = dataTest["decision"]
    
    del dataTrain["Unnamed: 0"]
    del dataTrain["decision"]
    del dataTest["Unnamed: 0"]
    del dataTest["decision"]
    
    dataTrain = np.matrix(dataTrain).astype(np.float32)
    trainAns = np.array(trainAns).astype(np.float32)
    
    dataTest = np.matrix(dataTest).astype(np.float32)
    testAns = np.array(testAns).astype(np.float32)


    w = logistic_regression(dataTrain, trainAns, iterMax, stepSize, lmda)


    accTrain = round(resultTestingLR(w, dataTrain, trainAns), 2)
    accTest = round(resultTestingLR(w, dataTest, testAns), 2)
 
    print("Training Accuracy: ", accTrain)
    print("Testing Accuracy: ", accTest)
 
    
if __name__ == '__main__':
    
    trainingPath = sys.argv[1]
    testingPath = sys.argv[2]
    inputMode = int(sys.argv[3]) # 0 == Logistic Reg, 1 == SVM

#    trainingPath = "trainingSet.csv"
#    testingPath = "testSet.csv"
#    inputMode = 1

    
    if(inputMode == 1):
        runLR(trainingPath, testingPath)
    elif(inputMode == 2):
        runSVM(trainingPath, testingPath)
    else:
        print("Wrong input!")
        print("LR == 0, SVM == 1")
        
        
#     t1 = [1,2,3,4,5]
#     t2 = [1,1,1,1,2]
#       
#     print(np.dot(t1,t2))
#     print(sumList(t1,t2) )
#     print(multList(-1, sumList(t1,t2)))
        
        
        
        
    
        
