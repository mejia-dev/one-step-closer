from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import GoalSerializer, UserSerializer
from userinfo.models import Goal


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/authapi/token',
        '/authapi/token/refresh',
    ]

    return Response(routes)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getGoals(request):
    user = request.user
    goals = user.goal_set.all()
    serializer = GoalSerializer(goals, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def createAuth(request):
    serialized = UserSerializer(data=request.data)
    if serialized.is_valid():
        User.objects.create_user(
            serialized.data['email'],
            serialized.data['username'],
            serialized.data['password']
        )
        return Response(serialized.data)
    else:
        return Response(serialized._errors)