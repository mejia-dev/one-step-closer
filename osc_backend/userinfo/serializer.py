from rest_framework import serializers
from .models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = ['user', 'goal_date', 'screen_goal', 'meditation_goal', 'excercise_goal', 'screen_time', 'meditation_time', 'excercise_time']
        extra_kwargs = {'user': {'read_only': True}}
        partial = True