'''
Created on Oct 23, 2019

@author: kimmyeongsu
'''

import pandas as pd
import sys


def makeList(encList):
    
    encodeList = []
    if("," in encList):
        tmp = encList.split(",")
        for t in tmp:
            encodeList.append(int(t))
    else:
        encodeList.append(int(encList))
        
    return encodeList

def encode(encList, inputPath, outputPath):
    
    print("Start label encoding!")
    
    encodeList = makeList(encList)
    originalCVS = pd.read_csv(inputPath)
    
    keys = []
    for key in originalCVS:
        keys.append(key)
    
    encodingList = []
    for i in encodeList:
        encodingList.append([list(dict.fromkeys(originalCVS[keys[i]])), keys[i]])
        
        
    print(encodingList)
    for enc in encodingList:
        enc[0].sort()
#         print(enc)
        encDic = {}
        for i in range(0,len(enc[0])):
            encDic.update({enc[0][i]:i})
            
        tmp = []
        for i in range(0, len(originalCVS[enc[1]])):
            tmp.append(encDic[originalCVS[enc[1]][i]])
            
        originalCVS[enc[1]] = tmp
            
    
    
    originalCVS.to_csv(outputPath)
            
    print("Encoding Done!");


if __name__ == '__main__':
    
#     d_rows = sys.argv[1]
#     inputPath = sys.argv[2]
#     outputPath = sys.argv[3]

    encList = "1,3,7"
    inputPath = "SalesJan2009.csv"
    outputPath = "labelEncoded.csv"
    
    encode(encList, inputPath, outputPath)
