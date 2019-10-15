from django.shortcuts import render
from rest_framework import viewsets          # add this
from . import exploration
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
# authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)

@api_view(['POST'])
@csrf_exempt
def upload_csv(request):
    print("Hello")
    if request.method == 'POST' and request.FILES['myfile']:
        myfile = request.FILES['myfile']
        print("My File: ", myfile)
        # fs = FileSystemStorage()
        # filename = fs.save(myfile.name, myfile)
        # uploaded_file_url = fs.url(filename)
        # return render(request, 'core/simple_upload.html', {
        #     'uploaded_file_url': uploaded_file_url
        # })
    exploration.prob2("/Users/harsha.valluri/Desktop/cs407/DatApex/backend/backend/digits-embedding.csv")
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



