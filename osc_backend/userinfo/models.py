from django.db import models
from django.contrib.auth.models import User
from datetime import datetime

class Goal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    goal_date = models.DateField(auto_now_add=True)
    screen_goal = models.FloatField(default=3)
    meditation_goal = models.FloatField(default=10)
    excercise_goal = models.FloatField(default=1)
    screen_time = models.FloatField(default=0)
    meditation_time = models.FloatField(default=0)
    excercise_time = models.FloatField(default=0)

    def __str__(self):
        return self.goal_date.strftime("%Y-%m-%d")

