from django.urls import path
from .views import DailyQuoteView

urlpatterns = [
    path('', DailyQuoteView.as_view()),
]