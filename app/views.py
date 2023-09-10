from django.shortcuts import render
from django.views.generic.edit import CreateView
from .models import ImageModel

class ImageUploadView(CreateView):
    model = ImageModel
    fields = ['title', 'image']
    template_name = 'image_upload.html'

def index(request):
    return render(request, 'index.html')