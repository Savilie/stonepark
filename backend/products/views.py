from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *

from .tasks import send_email_async

class ProductAPIView(APIView):

    @staticmethod
    def get(request):

        if request.query_params.get('cat_id'):

            products = Product.objects.filter(category_id=request.query_params.get('cat_id'))
            serializer = ProductSerializer(products, many=True)

            return Response(serializer.data, status=status.HTTP_200_OK)

        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class CategoryAPIView(APIView):

    @staticmethod
    def get(request):

        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class BidAPIView(APIView):

    def get(self, request):
        
        bids = Bid.objects.all()
        serializer = BidSerializer(bids, many=True)
        
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        
        serializer = BidSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()

            number = f"""{serializer.validated_data.get('number', None)}"""

            name = f"""{serializer.validated_data.get('name', 'Не указано')}"""

            info = f"""{serializer.validated_data.get('comment', 'Не указана')}"""

            if number:

                send_email_async.delay(name=name, number=number, info=info)

                return Response(status=status.HTTP_202_ACCEPTED)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
