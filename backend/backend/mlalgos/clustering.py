import pandas as pd
import numpy as np
import random

#from scipy.misc import toimage  #for part 1
import matplotlib as mpl        #for part 2
import matplotlib.pyplot as plt

np.random.seed(0)


def parseData(lawDigits, keys):
    
    print("Start Pre Processing Data!")
    
    parsedData = []
    labels = []
    
    
    for i in range(0, len(lawDigits[keys[0]])):
        parsedData.append(list(lawDigits.iloc[i]))
        
    for i in range(0, len(lawDigits[keys[0]])):
        labels.append(parsedData[i][1])
        del parsedData[i][0]
        del parsedData[i][0]
    
    print("Pre Processing Done!")
    
    return np.array(parsedData), np.array(labels)


def getXY(data, label, idxList):
    
    X = []
    Y = []
    tag = []
    
    for idx in idxList:
        tag.append(label[idx])
        X.append(data[idx][0])
        Y.append(data[idx][1])

    return X, Y, tag


#def prob1(fileName):
#
#    digitsLaw = pd.read_csv(fileName)
#    digitsLaw_Keys = list(digitsLaw.keys())
#    data, labels = parseData(digitsLaw, digitsLaw_Keys)
#
##     print(len(data))
#    randomIdx = random.randint(0, (len(data) - 1))
#
#    target = data[randomIdx]
#    target = target.reshape(28, 28)
#
##     print(target)
#    im = toimage(target)
#    im.save("Exploration/Exploration_01.png")


def prob2(fileName):
    
    digitsEmb = pd.read_csv(fileName)
    digitsEmb_Keys = list(digitsEmb.keys())
    
    numDigit = len(digitsEmb[digitsEmb_Keys[0]])
    randomList = np.random.randint(0, numDigit - 1, size=1000)
#     print(randomList)
    
    data, labels = parseData(digitsEmb, digitsEmb_Keys)
    
    N = 10
    fig, ax = plt.subplots(1,1, figsize=(7, 5))
    
    x, y, tag= getXY(data, labels, randomList)
    
    cmap = plt.cm.jet
    
    cmaplist = [cmap(i) for i in range(cmap.N)]
    cmap = cmap.from_list('Custom cmap', cmaplist, cmap.N)
    
    bounds = np.linspace(0,N,N+1)
    norm = mpl.colors.BoundaryNorm(bounds, cmap.N)
    
    
    scat = ax.scatter(x,y,c=tag,s=np.random.randint(100,500,N),cmap=cmap, norm=norm)
    cb = plt.colorbar(scat, spacing='proportional',ticks=bounds)
    cb.set_label('Colors of classes')
    ax.set_title('Exploration_02')
    plt.savefig("clustringResult.png")  

if __name__ == '__main__':
    
#    prob1("digits-raw.csv")
    prob2("digits-embedding.csv")







