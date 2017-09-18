from rest_framework import generics
  
from .models import Tweet
from .serializers import TweetSerializer
  
class TweetList(generics.ListCreateAPIView):
	"""
	API endpoint for listing and creating Book objects
	"""
	queryset = Tweet.objects.all()
	serializer_class = TweetSerializer
    
          
          
          
          
          
