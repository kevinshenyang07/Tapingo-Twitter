import unittest
from django.db import IntegrityError
from .models import Tweet
from .initdata import request_tweets


class TweetTestCase(unittest.TestCase):
    def test_empty_tweet(self):
        tweet = Tweet(id=921325)
        self.assertRaises(IntegrityError, tweet.save())

    def test_api_calls(self):
        tweets = request_tweets()
        assert len(tweets) == 100
        for tweet in tweets:
            fields = tweet.get('fields', {})
            assert fields.get('id') is not None
            assert fields.get('user_name') is not None
            assert fields.get('screen_name') is not None
            assert fields.get('profile_image_url') is not None
            assert fields.get('text') is not None
            assert fields.get('create_at') is not None

    
