from django.db import models
from django.utils import timezone

class DailyQuote(models.Model):
    quote = models.TextField()
    author = models.CharField(max_length=20)
    pub_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.author