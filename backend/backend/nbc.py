# Example of Naive Bayes implemented from Scratch in Python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import sys
import os
from backend.settings import BASE_DIR

def cmpAnswer(result, answer):
    
    if(len(answer) == 0):
        return 0
    
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


def nbc(t_frac, n):
    
    print("Working for f = ", n)
    
    save_path = os.path.join(BASE_DIR, 'backend/nbc/trainingSet_F') 
    save_path2 = os.path.join(BASE_DIR, 'backend/nbc/testSet_F') 

    trainingCVS = pd.read_csv(save_path + str(n) + ".csv")
    testingCVS = pd.read_csv(save_path + str(n) + ".csv" )
    
    del trainingCVS["Unnamed: 0"]
    del testingCVS["Unnamed: 0"]
    
    #    training = trainingCVS.sample(frac = t_frac, random_state = 47)
    training = trainingCVS
    
    model = trainModel(training)
    #     print(model)
    
    return runPredict(training, testingCVS, model)



def split(originalPath, f):
    #     print("called!")
    print("original Parth : ", originalPath)
    processList = pd.read_csv(originalPath)

    # for key in processList:
    #     print(key)
    
    del processList["Unnamed: 0"]
    #     df = pd.DataFrame(processList)
    training = processList.sample(frac=f, random_state=47)
    test = processList.loc[~processList.index.isin(training.index), :]
    save_path = os.path.join(BASE_DIR, 'backend/nbc/trainingSet_F') 
    save_path2 = os.path.join(BASE_DIR, 'backend/nbc/testSet_F') 

    training.to_csv(save_path+ str(f) + ".csv")
    test.to_csv(save_path2 + str(f) + ".csv")


def split2(originalPath, F):
    #     print("called!")
    print("original Parth : ", originalPath)
    processList = pd.read_csv(originalPath)

    # for key in processList:
    #     print(key)

    del processList["Unnamed: 0"]
    #     df = pd.DataFrame(processList)
    for f in F:
        training = processList.sample(frac=f, random_state=47)
        test = processList.loc[~processList.index.isin(training.index), :]
        save_path = os.path.join(BASE_DIR, 'backend/nbc/trainingSet_F') 
        save_path2 = os.path.join(BASE_DIR, 'backend/nbc/testSet_F') 

        training.to_csv(save_path+ str(f) + ".csv")
        test.to_csv(save_path2 + str(f) + ".csv")


#def autolabel(rects):
#    for rect in rects:
#        h = rect.get_height()
#        ax.text(rect.get_x()+rect.get_width()/2., 1.05*h, '%d'%int(h),
#                ha='center', va='bottom')

def graph(F, r, Path):
    x = F
    y1 = r
    #    yhat = savitzky_golay(y, 51, 3) # window size 51, polynomial order 3
    plt.plot(x,y1)
    #    plt.plot(x,, color='red')
    plt.xlabel('(BLEU: TrainAcc      Orange:  TestingAcc)')
    plt.savefig(Path)
#    plt.clf()

def runNBC(inputPath):
    print("Filename in NBC is : ", inputPath)
    F = [0.01,0.1,0.2,0.5,0.6,0.75,0.9,1]
    # print("part1");
    # for n in F:
    #     split(inputPath, n)

    split2(inputPath, F)
    
    # print("part2");
    result = [[], []]
    for n in F:
        r = nbc(n, n)
        result[0].append(r[0])
        result[1].append(r[1])
    # print("part3");
    
    for i in range(0, len(F)):
        print("F: ",  F[i])
        print("Training Accuracy: ", round(result[0][i], 2))
        print("testing Accuracy: ", round(result[1][i], 2))
    

    save_path = os.path.join(BASE_DIR, 'backend/OutNBC.png') 

    # graph(F, result[0], save_path)
    del F[-1]
    del result[1][-1]
    graph(F, result[1], save_path)



if __name__ == "__main__":
    
    inputPath = sys.argv[1] # "nbc/dating-binned.csv"
    runNBC(inputPath)

