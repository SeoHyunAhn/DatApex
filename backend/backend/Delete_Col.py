'''
Created on Oct 23, 2019

@author: kimmyeongsu
'''

import pandas as pd
import sys
import os
from backend.settings import BASE_DIR


def makeList(d_cols):
    deleteList = []
    tmp = d_cols.split(",")
    for t in tmp:
        deleteList.append(int(t))
        
    return deleteList

def deleteCol(d_cols, inputPath):
    
    print("Start deleting cols!")
    
    deleteList = makeList(d_cols)
    originalCVS = pd.read_csv(inputPath)
    
    keys = []
    for k in originalCVS:
        keys.append(k)
    
    for d in deleteList:
        del originalCVS[keys[d]]
    
    save_path = os.path.join(BASE_DIR, 'backend/result_testing.csv') 

    originalCVS.to_csv(save_path)
            
    print("Deletion Done!");

if __name__ == '__main__':
    
    d_rows = sys.argv[1]
    inputPath = sys.argv[2]
    outputPath = sys.argv[3]

#     d_rows = "1,2,3,4,5"
#     inputPath = "/Users/kimmyeongsu/Desktop/qwe/Prep/dating-full.csv"
#     outputPath = "/Users/kimmyeongsu/Desktop/qwe/Prep/colDeleted.csv"
    
    deleteCol(d_rows, inputPath, outputPath)