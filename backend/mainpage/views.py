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

    #@staticmethod
    #def post(request):
#
#        serializer = ReviewSerializer(data=request.data)
#
#        if serializer.is_valid():
#            serializer.save()
#            return Response(serializer.data, status=status.HTTP_201_CREATED)
#
#        else:
#            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
