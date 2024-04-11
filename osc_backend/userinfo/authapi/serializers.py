from rest_framework.serializers import ModelSerializer
from userinfo.models import Goal

class GoalSerializer(ModelSerializer):
    class Meta:
        model = Goal
        fields = '__all__'