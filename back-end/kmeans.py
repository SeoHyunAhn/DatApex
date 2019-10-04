import pandas as pd
import numpy as np
import random
import sys
from copy import deepcopy
# from scipy.spatial.distance import pdist, squareform

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
    
    return parsedData, labels

def getCenters(data, centeroids, K):
    
    clusterP = np.zeros(centeroids.shape) 
    clusterN = deepcopy(centeroids)
#     print(clusterN) 
    distance = np.zeros((len(data), K))
    
    
    for iter in range(0, 50):
        
#         print("@@@@@ ", iter + 1)
        
        # Measure the distance to every center
        for i in range(K):
            distance[:,i] = np.linalg.norm(data - clusterN[i], axis=1)
        # Assign all training data to closest center
        clusters = np.argmin(distance, axis = 1)
        
        clusterP = deepcopy(clusterN)
        # Calculate mean for every cluster and update the center
        for i in range(K):
            clusterN[i] = np.mean(data[clusters == i], axis=0)
        
        
#     print(clusterN)
    
    return clusterN

    
 
def calc_hG(labelsG, N, K):
    
    h_G = 0
    classDicG = {}
    
    for i in range(0, K):
        classDicG.update({i:0})
    
    for i in range(0, len(labelsG)):
        classDicG[labelsG[i]] += 1
    
    
    for key in classDicG:
        temp1 = float(classDicG[key]) / float(N)
        temp2 = -1.0 * temp1 * np.log2(temp1)
        h_G += temp2
 
    return h_G


def calc_hC(labelsC, N):

    h_C = 0
    classDicC = {}
    
    rmvDup_labelsC = list(set(labelsC))
    
    for i in range(0, len(rmvDup_labelsC)):
        classDicC.update({i:0})

    for i in range(0, len(labelsC)):
        classDicC[labelsC[i]] += 1


    for key in classDicC:
        temp1 = float(classDicC[key]) / float(N)
        temp2 = -1.0 * temp1 * np.log2(temp1)
        h_C += temp2
        
    return h_C


# h_C = H(Y)   (origin)
# h_G = H(C)   (calculated)

def calc_iCG(labelsC, labelsG, h_C, K, N):
    
    i_CG = 0
    classDic = {}
    
    rmvDup_labelsC = list(set(labelsC))
    
    for i in range(0, K):
        classDic.update({i:{}})
        for j in range(0, len(rmvDup_labelsC)):
            classDic[i].update({j:0})
            
            
    for i in range(0, len(labelsG)):
        classDic[labelsG[i]][labelsC[i]] += 1
            
#     print("@@@@@@@@@@@@")
#     for key in classDic:
#         print(key, classDic[key])
#     print("@@@@@@@@@@@@\n\n")
    
    
    tempSum = 0
#     test = 0
    for key1 in classDic:
        
        numTemp = 0
        part_igc = 0
        
        for key2 in classDic[key1]:
            numTemp += classDic[key1][key2]
#         test += numTemp
#         print(test)
        for key2 in classDic[key1]:
            temp1 = float(classDic[key1][key2]) / float(numTemp)
            
            if(temp1 == 0):
                temp2 = 0
            else:
                temp2 = -0.1 * temp1 * np.log2(temp1)
            part_igc += temp2
            
        tempSum += part_igc
    
    
    i_CG = h_C - tempSum
    
    
    return i_CG

 
 
 
def calcWCSS(data, centeroids, K, N):
    
    
    distance = np.zeros((len(data), K))
     
    for i in range(K):
        distance[:,i] = np.linalg.norm(data - centeroids[i], axis=1)
        # Assign all training data to closest center
    labels = np.argmin(distance, axis = 1)
    
    classDic = {}
    
    for i in range(0, K):
        classDic.update({i:[]})
    
    for i in range(0, len(labels)):
        classDic[labels[i]].append(data[i])
#         print(data[i])
    
    wcss = 0
    
    for key in classDic:
        dist = np.linalg.norm(classDic[key] - centeroids[key], axis=1)
        
        for d in dist:
            wcss += pow(d, 2)
    
#     print(wcss)

    return wcss
    
    
def calcNMI(data, centeroids, labelsC, K, N): 
    
    nmi = 0
    
    distance = np.zeros((len(data), K))
    
    for i in range(K):
        distance[:,i] = np.linalg.norm(data - centeroids[i], axis=1)
    
    labelsG = np.argmin(distance, axis = 1)

    h_C = calc_hC(labelsC, N)
    h_G = calc_hG(labelsG, N, K)
    i_CG = calc_iCG(labelsC, labelsG, h_C, K, N)
    nmi = i_CG / (h_C + h_G)
 
    return nmi

# A = average distance of i to points in same cluster
# B = average distance of i to points in other clusters
def calc_ai(classDic):
    
#     print("Calculating a_i!")
    
    a_i = []
    
    key_classDic = list(classDic.keys())
    
    for key in range(0, len(key_classDic)):
        
        num = len(classDic[key]) - 1
        temp_ai = 0
        
        for i in range(0, num):
            arr_i = classDic[key][i]
            tempArr = deepcopy(classDic[key])
            del tempArr[i]
            tempArr = np.array(tempArr)
            
            distance = np.linalg.norm(tempArr - arr_i, axis=1)
            temp_ai += np.sum(distance) / float(num)
        
        a_i.append(temp_ai)
            
#     print(a_i)
#     print("a_i Calculation Done!")
#     print("-------------------------------")
    
    
    return a_i
    
    
    
    
def calc_bi(classDic):
    
#     print("Calculating b_i!")
    
    b_i = []
    
    key_classDic = list(classDic.keys())
    
    for key1 in range(0, len(key_classDic)):
        
        num_i = len(classDic[key1])
        part_bi = []
        
        for key2 in range(0, len(key_classDic)):
            
            if(key1 == key2):
                continue
            
            num_j = len(classDic[key2])
            tmp = 0
            
            for i in range(0, num_i):
                distance = np.linalg.norm(classDic[key2] - classDic[key1][i], axis=1)
                tmp += np.sum(distance) / float(num_j)
                
            part_bi.append(tmp)
            
#         print(part_bi)
#         print(np.min(part_bi))    
        
        b_i.append(np.min(part_bi))
          
          
#     print(b_i)
#     print("b_i Calculation Done!")
#     print("-------------------------------")
    
    return b_i
    
    
def calc_si(a_i, b_i):
    
#     print(len(a_i), len(b_i))
    s_i = []
    
    for i in range(0, len(a_i)):
        si = (b_i[i] - a_i[i]) / max(a_i[i], b_i[i])
        s_i.append(si)
    
    return s_i
    
    
def calcSC(data, centeroids, K, N):
     
    distance = np.zeros((len(data), K))
     
    for i in range(K):
        distance[:,i] = np.linalg.norm(data - centeroids[i], axis=1)
        
    labels = np.argmin(distance, axis = 1)
    
    classDic = {}
    
    for i in range(0, K):
        classDic.update({i:[]})
    
    for i in range(0, len(labels)):
        classDic[labels[i]].append(data[i])
    

    a_i = calc_ai(classDic)
    b_i = calc_bi(classDic)
    s_i = calc_si(a_i, b_i)
    
#     print(s_i)
#     print(np.mean(s_i))
    return np.mean(s_i)
 

def run(fileName, K):

    digitsEmb = pd.read_csv(fileName)
    digitsEmb_Keys = list(digitsEmb.keys())
    
    N = len(digitsEmb[digitsEmb_Keys[0]])
    
    initCenter_idx = np.random.randint(0, N, size=K)
    print(initCenter_idx)
    
    data, labels = parseData(digitsEmb, digitsEmb_Keys)
    
    tempCenter = []
    
    for i in initCenter_idx:
        tempCenter.append(list(data[i]))
        
    data = np.array(data)
    labels = np.array(labels)
    tempCenter = np.array(tempCenter)
    
    centeroids = getCenters(data, tempCenter, K)
    
    wcss = calcWCSS(data, centeroids, K, N)
    sc = calcSC(data, centeroids, K, N)
    nmi = calcNMI(data, centeroids, labels, K, N)

     
    print("-------------- K =  %d --------------" %K)
     
    print("WC-SSD: ", wcss)
    print("SC: ", sc)
    print("NMI ", nmi)

    print("------------------------------------")

    
    print("Done!")


if __name__ == '__main__':
    
    K = int(sys.argv[1])
    run("digits-embedding.csv", K)
