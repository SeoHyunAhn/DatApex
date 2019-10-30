'''
Created on Oct 24, 2019

@author: kimmyeongsu
'''

import pandas as pd
import sys
    
def makeList(encList):
    encodeList = []
    tmp = encList.split(",")
    for t in tmp:
        encodeList.append(int(t))
        
    return encodeList
    
    
    
def doEncoding(data, processAttr):    
    
    
    elements = list(set(data[processAttr]))
    elements.sort()
    newAttribute = {}
    
    for key in elements:
        
        initialArr = []
        for i in range(0, len(data[processAttr])):
            initialArr.append(0)
    
        newAttribute.update({key:initialArr})

    for i in range(0, len(data[processAttr])):
        newAttribute[data[processAttr][i]][i] = 1
    
    del newAttribute[elements[-1]]
    
    return newAttribute
    
    

def preProcessing(encList, inputPath, outputPath):
    
    
    print("Start one-hot encoding!")
    
    encodeList = makeList(encList)
    temp = pd.read_csv(inputPath)
    
    
    data = {}
    keys = []
    for key in temp:
        data.update({key:temp[key]})
        keys.append(key)
    temp = None;
    
    
    processList = []
    for e in encodeList:
        processList.append(keys[e])
#     print(processList)


    for procAtt in processList:
#         print(procAtt)
        getNewAtt = doEncoding(data, procAtt)
#         del data[procAtt]
        for key in getNewAtt:
            data.update({(procAtt+'_'+key):getNewAtt[key]})


#     print(keys)
    for k in keys:
        del data[k]


    data = pd.DataFrame(data)
    data.to_csv(outputPath)
    
    print("Encoding done!")
    
    

if __name__ == '__main__':
    
#     encodeList = sys.argv[1]
#     inputPath = sys.argv[2]
#     outputPath = sys.argv[3]
    
    encList = "1,3,7"
    inputPath = "/Users/kimmyeongsu/Desktop/qwe/Prep/SalesJan2009.csv"
    outputPath = "/Users/kimmyeongsu/Desktop/qwe/Prep/oneHot.csv"
    
    preProcessing(encList, inputPath, outputPath)
    
