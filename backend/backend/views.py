from django.shortcuts import render
from rest_framework import viewsets          # add this
from django.views.decorators.csrf import csrf_exempt
from . import exploration
import os
from backend.settings import BASE_DIR
from django.http import HttpResponse

@csrf_exempt
def upload_csv(request):
    print("inside upload!!!!!!!!!!!!!!!!!!")

    # print(request)
    # print(request.FILES)

    # print("\n\n\n\n\n\n\n",request.FILES['file'])
    if request.method == 'POST' and request.FILES['file']:
        myfile = request.FILES['file']
        # print(myfile)

        file_path = os.path.join(BASE_DIR, 'backend/digits-embedding.csv') 
        exploration.prob2(myfile)
    save_path = os.path.join(BASE_DIR, 'backend/result_testing.png') 
    print(save_path)
    image_data = open(save_path, "rb").read()

    return HttpResponse(save_path, content_type="text")
    # return HttpResponse(image_data, content_type="image/png")

# def dataMining_SVM(request):
#     if request.method == 'POST' and request.FILES['myfile']:
#         myfile = request.FILES['myfile']

# def dataMining_NaiveBayes(request):
#     if request.method == 'POST' and request.FILES['myfile']:
#         myfile = request.FILES['myfile']

# def dataMining_LogisticRegression(request):
#     if request.method == 'POST' and request.FILES['myfile']:
#         myfile = request.FILES['myfile']

# def dataMining_Clustering(request):
#     if request.method == 'POST' and request.FILES['myfile']:
#         myfile = request.FILES['myfile']



