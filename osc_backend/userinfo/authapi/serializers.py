from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from userinfo.models import Goal

class GoalSerializer(ModelSerializer):
    class Meta:
        model = Goal
        fields = '__all__'

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']