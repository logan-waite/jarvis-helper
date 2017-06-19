from django.shortcuts import render
from django.http import Http404
from projects.serializer import ProjectSerializer
from projects.models import Project
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class ProjectList(APIView):
    """
    GET: Return the project (params: project_id)
    PUT: Create new project
    """
    def get(self, request, format=None):
        pass

    def put(self, request, format=None):
        data = request.data
        serializer = ProjectSerializer(data=data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
