from rest_framework import serializers
from tasks.models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ["name", "created_date", "due_date", "project", "priority", "assigned_to"]
