from rest_framework import serializers

from .models import Tweet

class TweetSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = Tweet
		fields = ('id', 'user_name', 'screen_name', 
				  'profile_image_url', 'text', 'created_at')
	
	def create(self, data):
		return Tweet(**data)
