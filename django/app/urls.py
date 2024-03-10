from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    path('', views.home , name="home"),
    path('home/', views.home , name="home"),
    path('add_book/', views.add_book, name="add_book"),
    path('add/', views.add , name="add"),
    path('book_list/', views.book_list , name="book_list"),
    path('search/', views.search , name="search"),
    path('search_book/', views.search_book , name="search_book"),
]