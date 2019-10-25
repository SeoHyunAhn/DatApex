
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

    # path('dataMining/run/SVM', views.dataMining_SVM),
    # path('dataMining/run/NaiveBayes', views.dataMining_NaiveBayes),
    # path('dataMining/run/LogisticRegression', views.dataMining_LogisticRegression),
    # path('dataMining/run/Clustering', views.dataMining_Clustering),
    # path('test/', views.test_url),
]