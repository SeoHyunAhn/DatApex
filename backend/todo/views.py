
# todo/views.py

from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import TodoSerializer      # add this
from .models import Todo                     # add this
        
class TodoView(viewsets.ModelViewSet):       # add this
  print("helloooooooo")
  serializer_class = TodoSerializer          # add this
  queryset = Todo.objects.all()              # add this
