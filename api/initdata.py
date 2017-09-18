# -*- coding:utf-8 -*-

import os
import json
import oauth2


def oauth_req(url, http_method="GET", post_body="", http_headers=None):
    consumer = oauth2.Consumer(key=os.getenv('CONSUMER_KEY'),
                               secret=os.getenv('CONSUMER_SECRET'))
    token = oauth2.Token(key=os.getenv('ACCESS_TOKEN'),
                         secret=os.getenv('ACCESS_TOKEN_SECRET'))
    client = oauth2.Client(consumer, token)
    resp, content = client.request(
        url, method=http_method, body=post_body, headers=http_headers)
    return content


def status_to_tweet(status):
    tweet = {}
    tweet['id'] = int(status['id_str'])
    tweet['user_name'] = status['user']['name']
    tweet['screen_name'] = status['user']['screen_name']
    tweet['profile_img_url'] = status['user']['profile_img_url'].replace('\\', '')
    tweet['text'] = status['text']
    tweet['created_at'] = status['created_at'][4:10]
    return tweet


request_url = 'https://api.twitter.com/1.1/search/tweets.json?q=%23tapingo&count=100'
statuses_str = oauth_req(request_url)
statuses = json.loads(tweets_str).get('statuses', [])
tweets = map(status_to_tweet, statuses)

with open('./fixture/initdata.json') as fo:
    json.dumps(tweets)
