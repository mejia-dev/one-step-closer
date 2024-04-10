from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *

class ReactView(APIView):

    serializer_class = ReactSerializer

    def get(self, request):
        output = [{"user": output.user_id, 
                   "goal_date": output.goal_date, 
                   "screen_goal": output.screen_goal, 
                   "meditation_goal": output.meditation_goal, 
                   "excercise_goal": output.excercise_goal, 
                   "screen_time": output.screen_time, 
                   "meditation_time": output.meditation_time, 
                   "excercise_time": output.excercise_time}
                  for output in Goal.objects.all()]
        return Response(output)
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
# Create your views here.
