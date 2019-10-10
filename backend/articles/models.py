from django.db import models

# Create your models here.
class Article(models.Model):
    title       = models.CharField(max_length=250)
    content     = models.TextField()
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title