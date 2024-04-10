from rest_framework import serializers
from .models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = ['user', 'goal_date', 'goal_name', 'goal_time', 'goal_time_progress']