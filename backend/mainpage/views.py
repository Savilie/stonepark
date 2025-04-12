from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Review
from .serializers import ReviewSerializer
# Create your views here.


class ReviewAPIView(APIView):

    @staticmethod
    def get(request):

        reviews = Review.objects.all()
        serializer = ReviewSerializer(reviews, many=True)

        return Response(serializer.data)

