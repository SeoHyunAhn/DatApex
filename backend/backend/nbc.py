
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


def cmpAnswer(result, answer):

    correct = 0
    wrong = 0
    for i in range(0, len(result)):
        if(result[i] == answer[i]):
            correct += 1
        else:
            wrong += 1
    
#    print(len(result), len(answer))
#    print("Correct = ", correct)
#    print("Wrong = ", wrong)

    return (correct*1.0)/len(answer)


def calcProb(x, mean, std):
    
    if(std == 0):
        return 0
    
    expnt = np.exp(-(np.power(x-mean,2)/(2*np.power(std,2))))
    result = (1 / (np.sqrt(2*np.pi) * std)) * expnt
    return result
    
    
def getPredictions(model, testSet):
    
#     print(testSet[1])
#     print(model)
    
    predictions = []
    for i in range(len(testSet)):
        
        probabilities = {}
        for key in model:
#         print(key)
            probabilities[key] = 1
            for j in range(0, len(model[key])):
                mean = model[key][j][0]
                std = model[key][j][1]
                x = testSet[i][j]
#             print(mean, stdev, x)
                probabilities[key] *= calcProb(x, mean, std)
        
        
        if(probabilities[0] < probabilities[1]):
            predictions.append(1)
        else:
            predictions.append(0)
        
    return predictions

def parseRow(training):
    
    parsedRow = []
    for i in range(0, len(training["age"])):
        temp = []
        for key in training:
            temp.append(training[key][i])
        parsedRow.append(temp)
#     temp = forTraining
    
    return parsedRow


def preProc_Testing(setForTest):
    
    answer = []
    for t in setForTest:
        answer.append(t[-1])
        del t[-1]
        
    return setForTest, answer

def runPredict(training, testingCVS, model):

    trainSet = parseRow(training)
    testingSet = parseRow(testingCVS)
    
    setTrain, answerTrain = preProc_Testing(trainSet)
    setTest, answerTest = preProc_Testing(testingSet)
    
    trainSet = None
    testingSet = None
    
    predictionsTrain = getPredictions(model, setTrain)
    predictionsTest = getPredictions(model, setTest)
    
#     print(predictionsTrain)
    resultTrainset = cmpAnswer(predictionsTrain, answerTrain)
    resultTestset = cmpAnswer(predictionsTest, answerTest)
    
#    print("Training Accuracy: ", round(resultTrainset, 5))
#    print("testing Accuracy: ", round(resultTestset, 5))

    return (resultTrainset, resultTestset)

def trainModel(training):
    
    parsedRow = parseRow(training)
    
    classified = {0:[], 1:[]}
    for i in range(0, len(parsedRow)):
        key = parsedRow[i][-1]
        del parsedRow[i][-1]
        classified[key].append(parsedRow[i])
    
    model = {0:None, 1:None}
    for key in classified:
#         print(key)
#         model[key] = summarize(classified[key])
        model[key] = [(np.mean(attribute), np.std(attribute)) for attribute in zip(*classified[key])]
        
#     for k in model:
#         print("#@#@#@#@#", model[k])
    
    return model


def nbc(t_frac, numBin):
    
    print("Woring for Num Beans = ", numBin)
    
    trainingCVS = pd.read_csv("trainingSet_" + str(numBin) + ".csv")
    testingCVS = pd.read_csv("testSet_" + str(numBin) + ".csv" )

    del trainingCVS["Unnamed: 0"]
    del testingCVS["Unnamed: 0"]
    
    training = trainingCVS.sample(frac = t_frac, random_state = 47)

    model = trainModel(training)
#     print(model)

    return runPredict(training, testingCVS, model)
    
    

def discretize(originalPath, numBin):
    
    processList = pd.read_csv(originalPath)
    
    delList = ["Unnamed: 0", "gender", "race", "race_o", "samerace", "field", "decision"]
    
    for d in delList:
        del processList[d]
        
    delList = None
        
    
    setDiscretize = {}
    
    for key in processList:
        tmp = []
        for v in processList[key]:
            tmp.append(v)
            
        setDiscretize.update({key:tmp})
                
    forBin = [(18,58), (18,58), (0,10), (0,10), (0,1), (0,1), (0,1), (0,1), (0,1), (0,1), (0,1), (0,1), (0,1) ,(0,1) ,(0,1), (0,1)]
    
    for i in range(0, 28):
        forBin.append((0,10))
        
    forBin.append((-1,1))
    forBin.append((0,10))
    forBin.append((0,10))
    
    
    
    labelList = []
    
    for i in range(0, numBin):
        labelList.append(i)
    
    
    
    for i in range(0, len(setDiscretize["gaming"])):
        if(setDiscretize["gaming"][i] > 10):
            setDiscretize["gaming"][i] = 10
#             print("@@@@@@^^^^^^^^^^")
        if(setDiscretize["reading"][i] > 10):
            setDiscretize["reading"][i] = 10
#             print("@@@@@@^------------")
    
#     print(labelList)
    
    listDiscretized = []
    cnt = 0
    
    for key in setDiscretize:
#         print(key)
        setDiscretize[key].append(forBin[cnt][0])
        setDiscretize[key].append(forBin[cnt][1])
        val = pd.cut(setDiscretize[key], numBin, labels = labelList)
#         val = pd.cut(setDiscretize[key], 5)
        temp1 = {}
        temp2 = []
         
        for i in range(0, len(val) - 2):
            if(val[i] not in temp1):
                temp1.update({val[i]:0})
            temp1[val[i]] += 1
            temp2.append(val[i])
             
        listDiscretized.append((key,temp1))
        setDiscretize[key] = temp2
        
        cnt += 1
 
    result = []
    for Discretized in listDiscretized:
#         print("=======================")
#         print(Discretized[0])
        temp = []
        for d in sorted(Discretized[1]):
            temp.append(Discretized[1][d])
#             print(d, Discretized[1][d])
#         print("=======================")
        result.append((Discretized[0], temp))
         
         
#     for d in listDiscretized["attractice_important"]:
#         print("=======================")
#         print(d, listDiscretized["attractice_important"][d])
#         print("=======================")
         
    listDiscretized = None
    
    processList = pd.read_csv(originalPath)
    
    delList = ["Unnamed: 0", "gender", "race", "race_o", "samerace", "field"]
    
    for d in delList:
        del processList[d]
        
    delList = None
    
    for key in processList:
        if (key in setDiscretize.keys()):
            processList[key] = setDiscretize[key]
    
    setDiscretize = None
    
    processList.to_csv("dating-binned_" + str(numBin) + ".csv" )
     
#     print("=============== %d  =================" %numBin)
#     for r in result:
#         print(r[0] + ":", r[1])
#     print("======================================")

def split(originalPath, numBin):
#     print("called!")
    processList = pd.read_csv(originalPath)
    del processList["Unnamed: 0"]
#     df = pd.DataFrame(processList)
    training = processList.sample(frac=0.2, random_state=47)
    test = processList.loc[~processList.index.isin(training.index), :]
    
#     print(len(processList))
    training.to_csv("trainingSet_"+ str(numBin) + ".csv")
    test.to_csv("testSet_" + str(numBin) + ".csv")   


#def autolabel(rects):
#    for rect in rects:
#        h = rect.get_height()
#        ax.text(rect.get_x()+rect.get_width()/2., 1.05*h, '%d'%int(h),
#                ha='center', va='bottom')

if __name__ == "__main__":
    
    numBins = [2, 5, 10, 50, 100, 200]

    for n in numBins:
        discretize("dating.csv", n)
        split("dating-binned_" + str(n) + ".csv", n)

    result = [[], []]
    for n in numBins:
        r = nbc(1, n)
        result[0].append(r[0])
        result[1].append(r[1])


    for i in range(0, len(numBins)):
        print("Bin size: ", numBins[i])
        print("Training Accuracy: ", round(result[0][i], 2))
        print("testing Accuracy: ", round(result[1][i], 2))


    with open("5_2Out1.txt", "a") as output:
        output.write("-------------------------------------\n")
        for i in range(0, len(numBins)):
            output.write("Bin size: " + str(numBins[i]) + '\n')
            output.write("Training Accuracy: " + str(round(result[0][i], 2)) + '\n')
            output.write("testing Accuracy: " +  str(round(result[1][i], 2)) + '\n')
            output.write("-------------------------------------\n")

    N = len(numBins)
    ind = np.arange(N)
    width = 0.3

    fig = plt.figure()
    ax = fig.add_subplot(111)

#    result = [[],[]]
#    result[0] = [1,2,3,4,5,6]
#    result[1] = [6,5,4,3,2,1]

    rects1 = ax.bar(ind, result[0], width, color='r')
    rects2 = ax.bar(ind+width, result[1], width, color='b')
    ax.set_xlabel(["# of beans = 2, 5, 10, 50, 100, 200 in order"])
    ax.legend((rects1[0], rects2[0]), ("Training Accuracy", "testing Accuracy"))

    
    for rect in rects1:
        h = rect.get_height()
        ax.text(rect.get_x()+rect.get_width()/2., 1.5, '%d'%int(h), ha='center', va='bottom')
    
    for rect in rects2:
        h = rect.get_height()
        ax.text(rect.get_x()+rect.get_width()/2., 1.5, '%d'%int(h), ha='center', va='bottom')


#    plt.show()
    plt.savefig("nbcResult.jpeg")
