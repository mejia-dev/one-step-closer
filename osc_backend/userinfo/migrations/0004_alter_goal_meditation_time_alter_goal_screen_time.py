# Generated by Django 5.0.4 on 2024-04-10 23:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userinfo', '0003_alter_goal_excercise_goal_alter_goal_meditation_goal_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goal',
            name='meditation_time',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='goal',
            name='screen_time',
            field=models.IntegerField(default=0),
        ),
    ]
