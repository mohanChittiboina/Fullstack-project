from django.urls import path
from .views import register,loginview

urlpatterns=[
    path('register/',register,name='register'),
    path('loginview/',loginview,name='loginview'),
]