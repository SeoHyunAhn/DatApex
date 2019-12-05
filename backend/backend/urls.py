
# backend/urls.py

from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
from . import views
        
router = routers.DefaultRouter()                      # add this

urlpatterns = [
    path('upload/csv/', views.upload_csv, name='upload_csv'),
    path('dataMining/NaiveBayes/', views.dataMining_NaiveBayes, name='naive_bayes'),
    path('dataMining/SVM/<str:step_size>/<str:lmda>/<str:num_iteration>', views.dataMining_SVM),
    path('dataMining/LogisticRegression/<str:step_size>/<str:lmda>/<str:num_iteration>', views.dataMining_LogisticRegression),
    path('dataMining/Clustering/<str:num_clusters>', views.dataMining_Clustering),
    path('dataMining/Bagging/<str:depth_limit>/<str:example_limit>', views.dataMining_Bagging),
    path('dataMining/DecisionTree/<str:depth_limit>/<str:example_limit>', views.dataMining_DecisionTree),
    path('dataMining/RandomForest/<str:depth_limit>/<str:example_limit>/<str:num_tree>', views.dataMining_RandomForest),
    # path('dataMining/DecisionTree/', views.dataMining_RandomForest),
    path('preProc/LabelEncoding/<str:encList>', views.prePrcoess_LabelEncoding),#!!!!!!!
    path('preProc/OneHotEncoding/<str:column_name>', views.prePrcoess_OneHotEncoding),
    path('preProc/ReplaceW/<str:replace_rows>/<str:from_word>/<str:to_word>', views.prePrcoess_ReplaceW),
    path('preProc/delRow/<str:d_rows>', views.prePrcoess_DeleteRow, name='delete_row'),
    path('preProc/delCol/<str:d_cols>', views.prePrcoess_DeleteCol, name='delete_col'),
    path('preProc/SelectCertain/<str:col_names>', views.prePrcoess_selectCertain),
    # path('test/', views.test_url),
]