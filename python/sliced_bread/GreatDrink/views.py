from django.shortcuts import render
from rest_framework import viewsets
from .serializers import GreatDrinkSerializer
from .models import Order

# Create your views here.

class GreatDrinkView(viewsets.ModelViewSet):
    serializer_class = GreatDrinkSerializer
    queryset = Order.objects.all()