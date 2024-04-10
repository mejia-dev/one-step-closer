from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator


class Mood(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.IntegerField(default = 5, validators=[MinValueValidator(1), MaxValueValidator(10)])
    time_entered = models.DateTimeField(auto_now_add=True)
    def __int__(self):
        return self.score

class Goal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    goal_date = models.DateField(auto_now_add=True)
    goal_name = models.TextField(max_length=250)
    goal_time = models.IntegerField(default=1)
    goal_time_progress = models.IntegerField(default=0)
    def __str__(self):
        return self.goal_name

