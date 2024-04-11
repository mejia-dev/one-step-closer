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
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
# Create your views here.
