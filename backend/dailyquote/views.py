from .serializers import DailyQuoteSerializer
from .models import DailyQuote
from rest_framework.views import APIView
from rest_framework.response import Response

class DailyQuoteView(APIView):
    def get(self, request):
        show = DailyQuote.objects.order_by('-pub_date')[:1]
        serializer = DailyQuoteSerializer(show, many=True)

        return Response(serializer.data)