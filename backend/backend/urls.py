
# backend/urls.py

from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
from todo import views        
from . import views
                    # add this
        
router = routers.DefaultRouter()                      # add this
# router.register(r'todos', views.TodoView, 'todo')     # add this
        
urlpatterns = [
    # path('todo/', views.TodoView.as_view()),   
    path('admin/', admin.site.urls),           
    path('api/', include(router.urls)),                # add this
    url(r'^upload/csv/$', views.upload_csv, name='upload_csv'),
    path('upload/csv/', views.upload_csv, name='upload_csv'),

]