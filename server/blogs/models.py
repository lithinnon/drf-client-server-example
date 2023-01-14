from django.db import models


class Blog(models.Model):
    email = models.EmailField("Email of Author")
    title = models.CharField("Title", max_length=1024)
    body = models.TextField("Body Content", blank=True)

    created_at = models.DateTimeField("Created at", auto_now_add=True)
    updated_at = models.DateTimeField("Updated at", auto_now=True)

    def __str__(self):
        return f"{self.created_at}-{self.email}-{self.title}"
