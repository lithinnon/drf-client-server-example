from rest_framework.routers import DefaultRouter
from blogs.viewsets import BlogViewSet

router = DefaultRouter()

router.register(r'blogs', BlogViewSet)
