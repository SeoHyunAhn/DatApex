from django.shortcuts import render
from rest_framework import viewsets          # add this
from django.views.decorators.csrf import csrf_exempt
from . import exploration,selectCertain, clustering, svm, logisticReg, nbc, decisionTree, baggingTree, randomForest,One_Hot, Delete_Row,Delete_Col, labelEncod, replaceW
import os
import csv
from backend.settings import BASE_DIR
from django.http import HttpResponse, Http404
import base64
from django.utils.encoding import smart_str

@csrf_exempt
def upload_csv(request):
    if request.method == 'POST' and request.FILES['file']:
        myfile = request.FILES['file']
        exploration.prob2(myfile)
    save_path = os.path.join(BASE_DIR, 'backend/result_testing.png') 
    print(save_path)
    image_data = open(save_path, "rb").read()
    with open(save_path, "rb") as image_data:
        str = base64.b64encode(image_data.read())

    return HttpResponse(str, content_type="image/png")

@csrf_exempt
def dataMining_SVM(request, step_size, lmda, num_iteration):
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>INSIDE VIEWS SVM")
    if request.method == 'POST' and request.FILES['file']:
        myfile = request.FILES['file']

        svm.runSVMAlgo(myfile)

    save_path = os.path.join(BASE_DIR, 'backend/SVMlearningCurve.png') 

    image_data = open(save_path, "rb").read()
    with open(save_path, "rb") as image_data:
        str = base64.b64encode(image_data.read())

    return HttpResponse(str, content_type="image/png")

@csrf_exempt
def dataMining_NaiveBayes(request):
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>INSIDE VIEWS NBA/NBC")

    if request.method == 'POST' and request.FILES['file']:
        myfile = request.FILES['file']

        nbc.runNBC(myfile)
    
    save_path = os.path.join(BASE_DIR, 'backend/outNBC.png') 

    image_data = open(save_path, "rb").read()
    with open(save_path, "rb") as image_data:
        str = base64.b64encode(image_data.read())
    
    return HttpResponse(str, content_type="image/png")

@csrf_exempt
def dataMining_LogisticRegression(request, step_size, lmda, num_iteration):
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>INSIDE VIEWS LOG REGRESSION")

    if request.method == 'POST' and request.FILES['file']:
        myfile = request.FILES['file']

        logisticReg.runLogisticReg(myfile)

    save_path = os.path.join(BASE_DIR, 'backend/LRlearningCurve.png') 

    image_data = open(save_path, "rb").read()
    with open(save_path, "rb") as image_data:
        str = base64.b64encode(image_data.read())

    return HttpResponse(str, content_type="image/png")

@csrf_exempt
def dataMining_Clustering(request, num_clusters):
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>INSIDE VIEWS CLUSTER")

    if request.method == 'POST' and request.FILES['file']:
        myfile = request.FILES['file']
        clustering.runClustering(myfile, int(num_clusters))

    save_path = os.path.join(BASE_DIR, 'backend/clusteringResult.png') 
    print(save_path)
    image_data = open(save_path, "rb").read()
    with open(save_path, "rb") as image_data:
        str = base64.b64encode(image_data.read())

    return HttpResponse(str, content_type="image/png")

@csrf_exempt
def dataMining_Bagging(request, depth_limit, example_limit):
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>INSIDE VIEWS BAG")
    print("WHY DO I NEED NUM TREE")

    if request.method == 'POST' and request.FILES['file']:
        training_file = request.FILES['training_file']
        testing_file = request.FILES['testing_file']

        baggingTree.runBT(training_file, testing_file, depth_limit, example_limi, num_trees)
    
    save_path = os.path.join(BASE_DIR, 'backend/baggingTree_result.png') 

    image_data = open(save_path, "rb").read()
    with open(save_path, "rb") as image_data:
        str = base64.b64encode(image_data.read())

    return HttpResponse(str, content_type="image/png")

@csrf_exempt
def dataMining_DecisionTree(request, depth_limit, example_limit):
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>INSIDE VIEWS DECISION TREEEE")
    if request.method == 'POST' and request.FILES['file']:
        training_file = request.FILES['training_file']
        testing_file = request.FILES['testing_file']

        decisionTree.runDT(training_file, testing_file, depth_limit, example_limit)
    
    save_path = os.path.join(BASE_DIR, 'backend/decisionTree_result.png') 

    image_data = open(save_path, "rb").read()
    with open(save_path, "rb") as image_data:
        str = base64.b64encode(image_data.read())

    return HttpResponse(str, content_type="image/png")

# @csrf_exempt
# def dataMining_RandomForest(request, depth_limit, example_limit, num_trees):
#     if request.method == 'POST' and request.FILES['file']:
#         training_file = request.FILES['training_file']
#         testing_file = request.FILES['testing_file']

#         randomForest.runRF(training_file, testing_file, depth_limit, example_limit, num_trees)
    
#     save_path = os.path.join(BASE_DIR, 'backend/randomForest_result.png') 

#     image_data = open(save_path, "rb").read()
#     with open(save_path, "rb") as image_data:
#         str = base64.b64encode(image_data.read())

#     return HttpResponse(str, content_type="image/png")

@csrf_exempt
def prePrcoess_LabelEncoding(request, encList):
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>INSIDE VIEWS LABEL ENCODING. NEED CODE")
    if request.method == 'POST' and request.FILES['file']:
        myfile = request.FILES['file']
        labelEncod.encode2(encList,myfile)
    save_path = os.path.join(BASE_DIR, 'backend/labelEncoding_result.csv') 
    with open(save_path, 'rb') as fh:
        response = HttpResponse(fh.read(), content_type="text/csv")
        response['Content-Disposition'] = 'inline; filename=' + os.path.basename(save_path)
        return response
    return Http404

@csrf_exempt
def prePrcoess_OneHotEncoding(request, column_name):
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>One hot encoding")
    if request.method == 'POST' and request.FILES['file']:
        myfile = request.FILES['file']
        print(column_name)
        One_Hot.preProcessing2(column_name, myfile)
    
    save_path = os.path.join(BASE_DIR, 'backend/oneHot_result.csv') 
    with open(save_path, 'rb') as fh:
        response = HttpResponse(fh.read(), content_type="text/csv")
        response['Content-Disposition'] = 'inline; filename=' + os.path.basename(save_path)
        return response
        
    return Http404

@csrf_exempt
def prePrcoess_ReplaceW(request, replace_rows, from_word, to_word):
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>INSIDE VIEWS REPLACE W")
    if request.method == 'POST' and request.FILES['file']:
        myfile = request.FILES['file']
        replaceW.replaceWord2(myfile, replace_rows, from_word, to_word)
    
    save_path = os.path.join(BASE_DIR, 'backend/replaceW_result.csv') 
    with open(save_path, 'rb') as fh:
        response = HttpResponse(fh.read(), content_type="text/csv")
        response['Content-Disposition'] = 'inline; filename=' + os.path.basename(save_path)
        return response
        
    return Http404



@csrf_exempt
def prePrcoess_DeleteRow(request, d_rows):
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>INSIDE VIEWS DELETE ROW")

    if request.method == 'POST' and request.FILES['file']:
        myfile = request.FILES['file']
        Delete_Row.deleteRow2(d_rows, myfile)
    save_path = os.path.join(BASE_DIR, 'backend/deleteRow_result.csv') 
    with open(save_path, 'rb') as fh:
        response = HttpResponse(fh.read(), content_type="text/csv")
        response['Content-Disposition'] = 'inline; filename=' + os.path.basename(save_path)
        return response
    return Http404

@csrf_exempt
def prePrcoess_DeleteCol(request, d_cols):
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>INSIDE VIEWS DELETE COL")

    if request.method == 'POST' and request.FILES['file']:
        myfile = request.FILES['file']
        Delete_Col.deleteCol2(d_cols, myfile)
    save_path = os.path.join(BASE_DIR, 'backend/deleteCol_result.csv') 
    with open(save_path, 'rb') as fh:
        response = HttpResponse(fh.read(), content_type="text/csv")
        response['Content-Disposition'] = 'inline; filename=' + os.path.basename(save_path)
        return response
    return Http404

@csrf_exempt
def prePrcoess_selectCertain(request, col_names):
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>INSIDE VIEWS SELECT CERTAIN")

    if request.method == 'POST' and request.FILES['file']:
        myfile = request.FILES['file']
        selectCertain.deleteCertain2(col_names, myfile)
    save_path = os.path.join(BASE_DIR, 'backend/selectCertain_result.csv') 
    with open(save_path, 'rb') as fh:
        response = HttpResponse(fh.read(), content_type="text/csv")
        response['Content-Disposition'] = 'inline; filename=' + os.path.basename(save_path)
        return response
    return Http404