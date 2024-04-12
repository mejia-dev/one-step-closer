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
    
    def patch(self, request):
        # Parse data from the request body
        print(request.data)
        user_id = request.data.get('user')
        date = request.data.get('goal_date')

        # Ensure user_id and date are provided
        if not user_id or not date:
            raise NotFound('User ID and date are required')

        try:
            # Retrieve the Goal object
            goal = Goal.objects.filter(user_id=user_id, goal_date=date).first()
        except Goal.DoesNotExist:
            raise NotFound("Goal entry not found.")
        
        # Update screen_time, meditation_time, and excercise_time fields
        goal.screen_time = request.data.get('screen_time', goal.screen_time)
        goal.meditation_time = request.data.get('meditation_time', goal.meditation_time)
        goal.excercise_time = request.data.get('excercise_time', goal.excercise_time)

        # Save the updated goal
        goal.save()

        # Serialize the updated goal and return the response
        serializer = ReactSerializer(instance=goal)
        return Response(serializer.data)

