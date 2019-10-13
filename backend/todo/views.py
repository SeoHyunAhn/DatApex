
# todo/views.py

from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import TodoSerializer      # add this
from .models import Todo                     # add this


class TodoView(viewsets.ModelViewSet):       # add this
    print("helloooooooo")
    serializer_class = TodoSerializer          # add this
    queryset = Todo.objects.all()              # add this


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
