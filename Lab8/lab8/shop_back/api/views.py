from django.shortcuts import render
from django.http import JsonResponse , HttpResponse

from api.models import Products,Category


def product_list(request):
    products = Products.objects.all().values()
    return JsonResponse(list(products), safe=False)

def product_detail(request, id):
    try:
        product = Products.objects.values().get(id=id)
        return JsonResponse(product, safe=False)
    except Products.DoesNotExist:
        return JsonResponse({'error': 'Продукт не найден'})


def category_list(request):
    categories = Category.objects.all().values()
    return JsonResponse(list(categories), safe=False)


def category_detail(request, id):
    try:
        category = Category.objects.values().get(id=id)
        return JsonResponse(category, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Категория не найдена'})


def category_products(request, id):
    category = Category.objects.get(id=id)
    products = Products.objects.filter(category=category).values()
    return JsonResponse(list(products), safe=False)
