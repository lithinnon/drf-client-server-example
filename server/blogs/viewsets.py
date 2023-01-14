from rest_framework import viewsets
from blogs.serializers import BlogSerializer
from blogs.models import Blog


class BlogViewSet(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()
