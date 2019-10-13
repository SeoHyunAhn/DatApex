

from django.shortcuts import render
from rest_framework import viewsets          # add this

def upload_csv(request):
    print("inside upload")
    if request.method == 'POST' and request.FILES['myfile']:
        myfile = request.FILES['myfile']
        # fs = FileSystemStorage()
        # filename = fs.save(myfile.name, myfile)
        # uploaded_file_url = fs.url(filename)
        # return render(request, 'core/simple_upload.html', {
        #     'uploaded_file_url': uploaded_file_url
        # })
    return render(request, 'core/simple_upload.html')
