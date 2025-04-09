from django.contrib import admin
from .models import Company,Vacancy


@admin.register(Company)
class Company(admin.ModelAdmin):
    list_display = ("id", "name", "city","address")
@admin.register(Vacancy)
class Vacancy(admin.ModelAdmin):
    list_display = ("id","name","salary","company")