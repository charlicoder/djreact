from django.shortcuts import render
from rest_framework import viewsets

from articles.models import Article
from articles.api.serializers import ArticleSerializer
# Create your views here.

class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
