from rest_framework import serializers
from . models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = '__all__'
        partial = True

    # def save(self, **kwargs):
    #     print("Saving data:", self.validated_data)  # Print validated data for debugging
    #     instance = super().save(**kwargs)
    #     print("Instance saved:", instance)  # Print saved instance for debugging
    #     return instance