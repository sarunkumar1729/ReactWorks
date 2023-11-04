from django.shortcuts import render
from .models import student
import json
# Create your views here.

def student_list(request):
    students = student.objects.all()
    student_data = [{'name': student.name} for student in students]
    student_data_json = json.dumps(student_data)
    return render(request, 'index.html', {'student_data_json': student_data_json})