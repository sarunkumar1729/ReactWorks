from django.shortcuts import render
from .models import products
from django.http import JsonResponse

# Create your views here.

def index(request):
    prod=products.objects.all()
    serialized_products = [{'id': p.id, 'name': p.name, 'price': p.price} for p in prod]
    print(serialized_products)
    return render(request,'index.html',{'products':serialized_products})

