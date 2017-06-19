from django.db import models
from django.contrib.auth.models import User
from projects.models import Project

# Create your models here.
class Task(models.Model):
    name = models.CharField(max_length=50)
    created_date = models.DateTimeField()
    due_date = models.DateField(default=None)
    priority = models.IntegerField()
    project = models.ForeignKey(Project)
    assigned_to = models.ManyToManyField(User)
