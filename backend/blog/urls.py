from django.urls import path
from .views import RecentPostView, BlogView, SinglePostView

urlpatterns = [
    path('', BlogView.as_view()),
    path('recent-posts/', RecentPostView.as_view()),
    path('posts/<slug:slug>/', SinglePostView.as_view()),
]