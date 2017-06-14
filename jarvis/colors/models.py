from django.db import models
from projects.models import Project

# Create your models here.
class Color(models.Model):
    name = models.CharField(max_length=20)
    description = models.CharField(max_length=100)
    hex_value = CharField(max_length=9)

    def __str__ (self):
        return str(self.name)

class Palette(models.Model):
    project = ForeignKey(Project)
