
# backend/urls.py

from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
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
    # path('dataMining/run/SVM', views.dataMining_SVM),
    # path('dataMining/run/NaiveBayes', views.dataMining_NaiveBayes),
    # path('dataMining/run/LogisticRegression', views.dataMining_LogisticRegression),
    # path('dataMining/run/Clustering', views.dataMining_Clustering),
    # path('test/', views.test_url),
]