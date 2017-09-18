from rest_framework import serializers

from .models import Tweet

class TweetSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = Tweet
		fields = ('id', 'user_name', 'screen_name', 
				  'profile_img_url', 'text', 'created_at')
