'''
Created on Oct 23, 2019

@author: kimmyeongsu
'''

import pandas as pd
import sys


def makeList(d_cols):
    deleteList = []
    tmp = d_cols.split(",")
    for t in tmp:
        deleteList.append(int(t))
        
    return deleteList

def deleteCol(d_cols, inputPath, outputPath):
    
    print("Start deleting cols!")
    
    deleteList = makeList(d_cols)
    originalCVS = pd.read_csv(inputPath)
    
    keys = []
    for k in originalCVS:
        keys.append(k)
    
    for d in deleteList:
        del originalCVS[keys[d]]
    
    originalCVS.to_csv(outputPath)
            
    print("Deletion Done!");


if __name__ == '__main__':
    
#    d_rows = sys.argv[1]
#    inputPath = sys.argv[2]
#    outputPath = sys.argv[3]

    d_cols = "1,2,3"
    inputPath = "SalesJan2009.csv"
    outputPath = "resultDel_Col.csv"
    
    deleteCol(d_cols, inputPath, outputPath)
