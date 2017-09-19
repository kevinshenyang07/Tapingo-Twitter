from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Tweet
from .serializers import TweetSerializer
  

class TweetList(APIView):
	"""
	API endpoint for listing and creating Book objects
	"""
	def get(self, request):
		tweets = Tweet.objects.all()
		serializer = TweetSerializer(tweets, many=True)
		return Response(serializer.data)
    
          
          
          
          
          
