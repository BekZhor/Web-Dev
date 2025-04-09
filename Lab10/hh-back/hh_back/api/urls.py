from django.contrib import admin
from django.urls import path
from api import views 
from api.cbv import VacancyListView,VacancyDetailView , CompanyDetailView,CompanyListView

urlpatterns = [
    path('companies/', CompanyListView.as_view()),
    path('companies/<int:id>/', CompanyDetailView.as_view()),
    path('companies/<int:id>/vacancies/', views.company_vacancies),
    path('vacancies/', VacancyListView.as_view()),
    path('vacancies/<int:id>/', VacancyDetailView.as_view()),
    path('vacancies/top_ten/', views.top_ten_vacancies),
]