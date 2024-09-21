from django.contrib import admin
from django.urls import path, include
from .views import LoginView, LogoutView, UserView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user/', UserView.as_view(), name='user'),
]
