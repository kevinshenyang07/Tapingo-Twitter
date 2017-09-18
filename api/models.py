from django.db import models

class Tweet(models.Model):
	id = models.BigIntegerField(primary_key=True)
	user_name = models.CharField(max_length=200, blank=False)
	screen_name = models.CharField(max_length=100, blank=False)
	profile_img_url = models.CharField(max_length=200, blank=False)
	text = models.CharField(max_length=500, blank=False)
	created_at = models.CharField(max_length=5, blank=False)

