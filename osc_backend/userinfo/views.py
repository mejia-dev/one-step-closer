from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from . serializer import *
from django.db import models
from django.utils import timezone

class ReactView(APIView):

    serializer_class = ReactSerializer

    def get(self, request):

        user_id = request.query_params.get('user_id')
        date = request.query_params.get('date')

        if not user_id or not date:
            raise NotFound("User ID and date are required")
        
        goals = Goal.objects.filter(user_id=user_id, goal_date=date).first()

        if not goals:
            raise NotFound("Today's goals not found")
        
        output = {
            "user": goals.user_id, 
            "goal_date": goals.goal_date, 
            "screen_goal": goals.screen_goal, 
            "meditation_goal": goals.meditation_goal, 
            "excercise_goal": goals.excercise_goal, 
            "screen_time": goals.screen_time, 
            "meditation_time": goals.meditation_time, 
            "excercise_time": goals.excercise_time
            }      
        return Response(output)
    
    def post(self, request):
        print(request.data)
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            print("serializer is valid")
            serializer.save()
            return Response(serializer.data)
        else:
            print("Serializer Errors:", serializer.errors)  # Print serializer errors for debugging
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # def post(self, request):
    #     # Ensure user ID is present in the request data
    #     user_id = request.data.get('user')
    #     if user_id is None:
    #         return Response({'error': 'User ID is missing'}, status=status.HTTP_400_BAD_REQUEST)

    #     # Add user ID to the request data if not already present
    #     request_data = request.data.copy()
    #     request_data.setdefault('user', user_id)

    #     # Pass the updated request data to the serializer
    #     serializer = ReactSerializer(data=request_data)

    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
