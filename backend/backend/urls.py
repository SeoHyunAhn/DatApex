
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
    # path('dataMining/NaiveBayes/', views.dataMining_NaiveBayes, name='naive_bayes'),
    path('dataMining/SVM/<str:step_size>/<str:lmda>/<str:num_iteration>', views.dataMining_SVM),
    path('dataMining/LogisticRegression/<str:step_size>/<str:lmda>/<str:num_iteration>', views.dataMining_LogisticRegression),
    # path('dataMining/Clustering/', views.dataMining_Clustering),
    # path('dataMining/Bagging/', views.dataMining_Bagging),
    # path('dataMining/DecisionTree/', views.dataMining_DecisionTree),
    # path('dataMining/DecisionTree/', views.dataMining_RandomForest),
    path('preProc/LabelEncoding/', views.prePrcoess_LabelEncoding),
    path('preProc/OneHotEncoding/<str:column_name>', views.prePrcoess_OneHotEncoding),
    # path('preProc/ReplaceW', views.prePrcoess_ReplaceW),
    # path('test/', views.test_url),
]