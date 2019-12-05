'''
Created on Dec 3, 2019

@author: kimmyeongsu
'''

import pandas as pd
import sys


def makeList(d_cols):
    deleteList = []
    tmp = d_cols.split(",")
    for t in tmp:
        deleteList.append(t)
        
    return deleteList

def deleteCertain(d_cols, inputPath, outputPath):
    
    print("Start deletion!")
    
    deleteList = makeList(d_cols)
    originalCVS = pd.read_csv(inputPath)
    
#     print(deleteList)
    
    keys = []
    for k in originalCVS:
        keys.append(k)
    
    for d in deleteList:
        del originalCVS[d]
    
    originalCVS.to_csv(outputPath)
            
    print("Deletion Done!");


if __name__ == '__main__':
    
    certains = sys.argv[1]
    inputPath = sys.argv[2]
    outputPath = sys.argv[3]

#     certains = "City,Name"
#     inputPath = "SalesJan2009.csv"
#     outputPath = "resultDel_Certain.csv"
    
    deleteCertain(certains, inputPath, outputPath)
