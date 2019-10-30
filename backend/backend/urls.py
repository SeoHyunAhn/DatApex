
# backend/urls.py

from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
from . import views
        
router = routers.DefaultRouter()                      # add this

urlpatterns = [
    # url(r'^upload/csv/$', views.upload_csv, name='upload_csv'),
    path('upload/csv/', views.upload_csv, name='upload_csv'),
    # path('preProc/delCol/<int:d_cols>/', views.prePrcoess_DeleteCol),
    path('preProc/delRow/<str:d_rows>', views.prePrcoess_DeleteRow, name='delete_row'),

    # path('dataMining/SVM', views.dataMining_SVM),
    # path('dataMining/NaiveBayes', views.dataMining_NaiveBayes),
    # path('dataMining/LogisticRegression', views.dataMining_LogisticRegression),
    # path('dataMining/Clustering', views.dataMining_Clustering),
    # path('dataMining/Bagging', views.dataMining_Bagging),
    # path('dataMining/DecisionTree', views.dataMining_DecisionTree),
    # path('test/', views.test_url),
]