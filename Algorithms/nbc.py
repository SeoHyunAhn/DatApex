# Example of Naive Bayes implemented from Scratch in Python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


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
    
    trainingCVS = pd.read_csv("nbc/trainingSet_F" + str(n) + ".csv")
    testingCVS = pd.read_csv("nbc/testSet_F" + str(n) + ".csv" )
    
    del trainingCVS["Unnamed: 0"]
    del testingCVS["Unnamed: 0"]
    
    #    training = trainingCVS.sample(frac = t_frac, random_state = 47)
    training = trainingCVS
    
    model = trainModel(training)
    #     print(model)
    
    return runPredict(training, testingCVS, model)



def split(originalPath, f):
    #     print("called!")
    processList = pd.read_csv(originalPath)
    del processList["Unnamed: 0"]
    #     df = pd.DataFrame(processList)
    training = processList.sample(frac=f, random_state=47)
    test = processList.loc[~processList.index.isin(training.index), :]
    
    #    print(len(training))
    #    print(len(test))
    
    #     print(len(processList))
    training.to_csv("nbc/trainingSet_F"+ str(f) + ".csv")
    test.to_csv("nbc/testSet_F" + str(f) + ".csv")


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



if __name__ == "__main__":
    
    F = [0.01,0.1,0.2,0.5,0.6,0.75,0.9,1]
    
    for n in F:
        split("nbc/dating-binned.csv", n)
    
    result = [[], []]
    for n in F:
        r = nbc(n, n)
        result[0].append(r[0])
        result[1].append(r[1])
    
    
    for i in range(0, len(F)):
        print("F: ",  F[i])
        print("Training Accuracy: ", round(result[0][i], 2))
        print("testing Accuracy: ", round(result[1][i], 2))
    
    
#    with open("outputStatement/5_3Out1.txt", "a") as output:
#        output.write("-------------------------------------\n")
#        for i in range(0, len( F)):
#            output.write("F value: " + str( F[i]) + '\n')
#            output.write("Training Accuracy: " + str(round(result[0][i], 2)) + '\n')
#            output.write("testing Accuracy: " +  str(round(result[1][i], 2)) + '\n')
#            output.write("-------------------------------------\n")


#    result = [[5,4,6,4,5,4,5,6], [6,7,6,4,6,5,6,7]]

#    graph(F, result[0], "nbcResult/Out1.jpeg")
    del F[-1]
    del result[1][-1]
    graph(F, result[1], "nbcResult/OutNBC.jpeg")

