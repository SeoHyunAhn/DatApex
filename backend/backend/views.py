from django.shortcuts import render
from rest_framework import viewsets          # add this
from django.views.decorators.csrf import csrf_exempt
from . import exploration

@csrf_exempt
def upload_csv(request):
    print("inside upload!!!!!!!!!!!!!!!!!!")
    print(request)
    print(request.FILES)

    print("\n\n\n\n\n\n\n",request.FILES['file'])
    if request.method == 'POST' and request.FILES['file']:
        myfile = request.FILES['file']
        print(myfile)

        exploration.prob2("/Users/harsha.valluri/Desktop/cs407/DatApex/backend/backend/digits-embedding.csv")

        # harsha's part of implementing myeongsu's code PLZ
    return render(request, 'core/simple_upload.html')

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



