'''
Created on Oct 23, 2019

@author: kimmyeongsu
'''

import pandas as pd
import sys
import os
from backend.settings import BASE_DIR


def makeList(d_rows):
    deleteList = []
    tmp = d_rows.split(",")
    for t in tmp:
        deleteList.append(int(t))
        
    return deleteList

def deleteRow(d_rows, inputPath, outputPath):
    print("Start deleting rows!")
    
    deleteList = makeList(d_rows)
    originalCVS = pd.read_csv(inputPath)
    
    temp = {}

    for key in originalCVS:
        temp.update({key:[]})


    for key in originalCVS:
        for i in range(0, len(originalCVS[key])):
            if(i not in deleteList):
                temp[key].append(originalCVS[key][i])
    
    
    temp1 = pd.DataFrame(temp)
    temp1.to_csv(outputPath)
            
    print("Deletion Done!")

def deleteRow2(d_rows, inputPath):
    
    print("Start deleting rows!")
    
    deleteList = makeList(d_rows)
    originalCVS = pd.read_csv(inputPath)
    
    temp = {}

    for key in originalCVS:
        temp.update({key:[]})


    for key in originalCVS:
        for i in range(0, len(originalCVS[key])):
            if(i not in deleteList):
                temp[key].append(originalCVS[key][i])
    
    
    save_path = os.path.join(BASE_DIR, 'backend/deleteRow_result.csv') 

    temp1 = pd.DataFrame(temp)
    temp1.to_csv(save_path)
            
    print("Deletion Done!")

if __name__ == '__main__':
    
    d_rows = sys.argv[1]
    inputPath = sys.argv[2]
    outputPath = sys.argv[3]

#     d_rows = "1,2,3,4,5"
#     inputPath = "/Users/kimmyeongsu/Desktop/qwe/Prep/dating-full.csv"
#     outputPath = "/Users/kimmyeongsu/Desktop/qwe/Prep/rowDeleted.csv"
    
    deleteRow(d_rows, inputPath, outputPath)