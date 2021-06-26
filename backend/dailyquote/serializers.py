from rest_framework import serializers
from .models import DailyQuote

class DailyQuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyQuote
        fields = '__all__'