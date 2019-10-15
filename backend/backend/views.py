

from django.shortcuts import render
from rest_framework import viewsets          # add this
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def upload_csv(request):
    print("inside upload!!!!!!!!!!!!!!!!!!")
    print(request)
    print(request.FILES)

    print("\n\n\n\n\n\n\n",request.FILES['file'])
    if request.method == 'POST' and request.FILES['file']:
        myfile = request.FILES['file']
        print(myfile)
        # harsha's part of implementing myeongsu's code PLZ
    return render(request, 'core/simple_upload.html')
