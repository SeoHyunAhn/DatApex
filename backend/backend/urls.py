
# backend/urls.py

from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
from . import views
        
router = routers.DefaultRouter()                      # add this

urlpatterns = [
    path('upload/csv/', views.upload_csv, name='upload_csv'),
    path('preProc/delRow/<str:d_rows>', views.prePrcoess_DeleteRow, name='delete_row'),
    path('preProc/delCol/<str:d_cols>', views.prePrcoess_DeleteCol, name='delete_col'),

    # path('dataMining/SVM', views.dataMining_SVM),
    # path('dataMining/NaiveBayes', views.dataMining_NaiveBayes),
    # path('dataMining/LogisticRegression', views.dataMining_LogisticRegression),
    # path('dataMining/Clustering', views.dataMining_Clustering),
    # path('dataMining/Bagging', views.dataMining_Bagging),
    # path('dataMining/DecisionTree', views.dataMining_DecisionTree),
    # path('preProc/LabelEncoding', views.preProcess_LabelEncoding),
    # path('preProc/OneHotEncoding/<str:column_name>', views.preProcess_OneHotEncoding),
    # path('preProc/ReplaceW', views.prePrcoess_ReplaceW),
    # path('test/', views.test_url),
]