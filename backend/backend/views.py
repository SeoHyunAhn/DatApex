from django.shortcuts import render
from rest_framework import viewsets          # add this
from django.views.decorators.csrf import csrf_exempt
from . import exploration, Delete_Row,Delete_Col, clustering, lr_svm, nbc, One_Hot, decisionTree, baggingTree, randomForest
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
def prePrcoess_DeleteRow(request, d_rows):
    if request.method == 'POST' and request.FILES['file']:
        myfile = request.FILES['file']
        Delete_Row.deleteRow2(d_rows, myfile)
    save_path = os.path.join(BASE_DIR, 'backend/result_testing.csv') 
    with open(save_path, 'rb') as fh:
        response = HttpResponse(fh.read(), content_type="text/csv")
        response['Content-Disposition'] = 'inline; filename=' + os.path.basename(save_path)
        return response
    return Http404

@csrf_exempt
def prePrcoess_DeleteCol(request, d_cols):
    if request.method == 'POST' and request.FILES['file']:
        myfile = request.FILES['file']
        Delete_Col.deleteCol(d_cols, myfile)
    save_path = os.path.join(BASE_DIR, 'backend/result_testing.csv') 
    with open(save_path, 'rb') as fh:
        response = HttpResponse(fh.read(), content_type="text/csv")
        response['Content-Disposition'] = 'inline; filename=' + os.path.basename(save_path)
        return response
    return Http404

# @csrf_exempt
# def dataMining_SVM(request, step_size, lmda, num_iteration):
#     if request.method == 'POST' and request.FILES['file']:
#         training_file = request.FILES['training_file']
#         testing_file = request.FILES['testing_file']

#         lr_svm.runSVM(training_file, testing_file, step_size, lmda, num_iteration)
    
#     save_path = os.path.join(BASE_DIR, 'backend/svm_result.png') 

#     image_data = open(save_path, "rb").read()
#     with open(save_path, "rb") as image_data:
#         str = base64.b64encode(image_data.read())

#     return HttpResponse(str, content_type="image/png")

# @csrf_exempt
# def dataMining_NaiveBayes(request):
#     if request.method == 'POST' and request.FILES['file']:
#         myfile = request.FILES['file']
#         numBins = request.POST['numBins']

#         nbc.discretize(training_file, testing_file)
    
#     save_path = os.path.join(BASE_DIR, 'backend/nbcResult.png') 

#     image_data = open(save_path, "rb").read()
#     with open(save_path, "rb") as image_data:
#         str = base64.b64encode(image_data.read())
    
#     return HttpResponse(str, content_type="image/png")

# @csrf_exempt
# def dataMining_LogisticRegression(request, step_size, lmda, num_iteration):
#     if request.method == 'POST' and request.FILES['file']:
#         training_file = request.FILES['training_file']
#         testing_file = request.FILES['testing_file']

#         lr_svm.runLR(training_file, testing_file, step_size, lmda, num_iteration)
    
#     save_path = os.path.join(BASE_DIR, 'backend/lr_result.png') 

#     image_data = open(save_path, "rb").read()
#     with open(save_path, "rb") as image_data:
#         str = base64.b64encode(image_data.read())

#     return HttpResponse(str, content_type="image/png")

# @csrf_exempt
# def dataMining_Clustering(request, num_clusters):
# if request.method == 'POST' and request.FILES['file']:
#         myfile = request.FILES['file']
#         clustering.run(myfile, num_clusters)

#     save_path = os.path.join(BASE_DIR, 'backend/clustering_result.png') 
#     print(save_path)
#     image_data = open(save_path, "rb").read()
#     with open(save_path, "rb") as image_data:
#         str = base64.b64encode(image_data.read())

#     return HttpResponse(str, content_type="image/png")

# @csrf_exempt
# def dataMining_Bagging(request, depth_limit, example_limit, num_trees):
#     if request.method == 'POST' and request.FILES['file']:
#         training_file = request.FILES['training_file']
#         testing_file = request.FILES['testing_file']

#         baggingTree.runBT(training_file, testing_file, depth_limit, example_limi, num_trees)
    
#     save_path = os.path.join(BASE_DIR, 'backend/baggingTree_result.png') 

#     image_data = open(save_path, "rb").read()
#     with open(save_path, "rb") as image_data:
#         str = base64.b64encode(image_data.read())

#     return HttpResponse(str, content_type="image/png")

# @csrf_exempt
# def dataMining_DecisionTree(request, depth_limit, example_limit):
#     if request.method == 'POST' and request.FILES['file']:
#         training_file = request.FILES['training_file']
#         testing_file = request.FILES['testing_file']

#         decisionTree.runDT(training_file, testing_file, depth_limit, example_limit)
    
#     save_path = os.path.join(BASE_DIR, 'backend/decisionTree_result.png') 

#     image_data = open(save_path, "rb").read()
#     with open(save_path, "rb") as image_data:
#         str = base64.b64encode(image_data.read())

#     return HttpResponse(str, content_type="image/png")

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

# def prePrcoess_LabelEncoding(request):

# def prePrcoess_OneHotEncoding(request, column_name):
#     print("inside delete!!!!!!!!!!!!!!!!!!")
#     if request.method == 'POST' and request.FILES['file']:
#         myfile = request.FILES['file']
#         print(column_name)
#         One_Hot.preProcessing(column_name, myfile)
    
#     save_path = os.path.join(BASE_DIR, 'backend/one_hot_result.csv') 
#     with open(save_path, 'rb') as fh:
#         response = HttpResponse(fh.read(), content_type="text/csv")
#         response['Content-Disposition'] = 'inline; filename=' + os.path.basename(save_path)
#         return response
        
#     return Http404

# def preProcess_ReplaceW(request):