'''
Created on Oct 23, 2019

@author: kimmyeongsu
'''

import pandas as pd
import sys
import os
from backend.settings import BASE_DIR


def replaceWord(inputPath, replace_rows, fromW, toW):
    
    print("Start replacing words!")
    
    row  = int(replace_rows)
    keys = []
    originalCVS = pd.read_csv(inputPath)
    
    for key in originalCVS:
        keys.append(key)
    
    temp = []
    
    for i in range(0, len(originalCVS[keys[row]])):
        tmp = originalCVS[keys[row]][i]
        if(fromW in tmp):
            temp.append(tmp.replace(fromW, toW))
        else:
            temp.append(tmp)
    
    originalCVS[keys[row]] = temp
    
    originalCVS.to_csv("replace.csv")
            
    print("Replacing Done!");


def replaceWord2(inputPath, replace_rows, fromW, toW):
    
    print("Start replacing words!")
    
    row  = int(replace_rows)
    keys = []
    originalCVS = pd.read_csv(inputPath)
    
    for key in originalCVS:
        keys.append(key)
    
    temp = []
    
    for i in range(0, len(originalCVS[keys[row]])):
        tmp = originalCVS[keys[row]][i]
        if(fromW in tmp):
            temp.append(tmp.replace(fromW, toW))
        else:
            temp.append(tmp)
    

    save_path = os.path.join(BASE_DIR, 'backend/replaceW_result.csv') 
    originalCVS[keys[row]] = temp
    originalCVS.to_csv(save_path)
            
    print("Replacing Done!")

if __name__ == '__main__':
    
#    inputPath = sys.argv[1]
#    replace_rows = sys.argv[2]
#    fromW = sys.argv[3]
#    toW = sys.argv[4]

    inputPath = "SalesJan2009.csv"
    replace_col = "3"
    fromW = "Visa"
    toW = "Hello"
    
    replaceWord(inputPath, replace_col, fromW, toW)
