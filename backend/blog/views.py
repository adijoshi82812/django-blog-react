from .serializers import BlogSerializer
from .models import Blog
from rest_framework.views import APIView
from rest_framework.response import Response

class RecentPostView(APIView):
    def get(self, request):
        show = Blog.objects.order_by('-pub_date').filter(status="published")[:3]
        serializer = BlogSerializer(show, many=True)

        return Response(serializer.data)

class BlogView(APIView):
    def get(self, request):
        show = Blog.objects.order_by('-pub_date').filter(status="published")
        serializer = BlogSerializer(show, many=True)

        return Response(serializer.data)

class SinglePostView(APIView):
    def get(self, request, slug):
        show = Blog.objects.filter(slug=slug)
        serializer = BlogSerializer(show, many=True)

        return Response(serializer.data)