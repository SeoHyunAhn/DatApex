from django.shortcuts import render
from rest_framework import viewsets          # add this
from django.views.decorators.csrf import csrf_exempt
from . import exploration, Delete_Row
import os
import csv
from backend.settings import BASE_DIR
from django.http import HttpResponse, Http404
import base64
from django.utils.encoding import smart_str

@csrf_exempt
def upload_csv(request):
    print("inside upload!!!!!!!!!!!!!!!!!!")

    # print(request)
    # print(request.FILES)

    # print("\n\n\n\n\n\n\n",request.FILES['file'])
    if request.method == 'POST' and request.FILES['file']:
        myfile = request.FILES['file']
        # print(myfile)

        # file_path = os.path.join(BASE_DIR, 'backend/digits-embedding.csv') 
        exploration.prob2(myfile)
    save_path = os.path.join(BASE_DIR, 'backend/result_testing.png') 
    print(save_path)
    image_data = open(save_path, "rb").read()
    with open(save_path, "rb") as image_data:
        str = base64.b64encode(image_data.read())
    # return HttpResponse(save_path, content_type="text")
    return HttpResponse(str, content_type="image/png")

@csrf_exempt
def prePrcoess_DeleteRow(request, d_rows):
    print("inside delete!!!!!!!!!!!!!!!!!!")
    if request.method == 'POST' and request.FILES['file']:
        myfile = request.FILES['file']
        print(d_rows)
        Delete_Row.deleteRow2(d_rows, myfile)
    
    # response = HttpResponse(content_type='text/csv')
    # response['Content-Disposition'] = 'attachment; filename="backend/result_testing.csv"'
    save_path = os.path.join(BASE_DIR, 'backend/result_testing.csv') 
    with open(save_path, 'rb') as fh:
        response = HttpResponse(fh.read(), content_type="text/csv")
        response['Content-Disposition'] = 'inline; filename=' + os.path.basename(save_path)
        return response
    # response = HttpResponse(content_type='application/force-download') # mimetype is replaced by content_type for django 1.7
    # response['Content-Disposition'] = 'attachment; filename=%s' % smart_str("result_testing.csv")
    # response['X-Sendfile'] = smart_str(save_path)
    return Http404

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



