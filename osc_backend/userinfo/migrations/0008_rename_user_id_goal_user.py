# Generated by Django 5.0.4 on 2024-04-11 21:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userinfo', '0007_rename_user_goal_user_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='goal',
            old_name='user_id',
            new_name='user',
        ),
    ]
