from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from api.serializer import CompanySerializer,VacancySerializer
from api.models import Company,Vacancy


from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class VacancyListView(APIView):
    def get(self,request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data,safe=False,status=200)

    
class VacancyDetailView(APIView):
    def get(self,request, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist:
            return JsonResponse({'error': 'Vacancy not found'}, status=404)
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data,safe=False)
    
class CompanyListView(APIView):
    def get(self,request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data,safe=False)

class CompanyDetailView(APIView):
    def get(self,request, id):
        try:
            company = Company.objects.get(id=id)
        except Company.DoesNotExist:
            return JsonResponse({'error': 'Company not found'}, status=404)
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data,safe=False)
