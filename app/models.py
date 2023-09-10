from django.db import models

#Store the uploaded image in a subdirectory
class ImageModel(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to="images/")

    def __str__(self):
        return self.title