from django.db import models
from django.utils import timezone

class Category(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Blog(models.Model):
    options = (
        ('published', 'Published'),
        ('draft', 'Draft')
    )

    category = models.ForeignKey(Category, on_delete=models.PROTECT, default=1)
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to="post_images")
    image_alt = models.CharField(max_length=20)
    slug = models.SlugField(unique=True, default=None)
    content = models.TextField()
    pub_date = models.DateTimeField(default=timezone.now)
    status = models.CharField(choices=options,max_length=12, default="published")

    def __str__(self):
        return self.title