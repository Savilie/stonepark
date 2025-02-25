from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *


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

    @staticmethod
    def get(request):

        bids = Bid.objects.all()
        serializer = BidSerializer(bids, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    @staticmethod
    def post(request):

        serializer = BidSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
