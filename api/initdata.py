# -*- coding:utf-8 -*-
import os
import json
import oauth2


# core oauth request
def oauth_req(url, http_method="GET", post_body="", http_headers=None):
    consumer = oauth2.Consumer(key=os.getenv('CONSUMER_KEY'),
                               secret=os.getenv('CONSUMER_SECRET'))
    token = oauth2.Token(key=os.getenv('ACCESS_TOKEN'),
                         secret=os.getenv('ACCESS_TOKEN_SECRET'))
    client = oauth2.Client(consumer, token)
    resp, content = client.request(
        url, method=http_method, body=post_body, headers=http_headers)
    return content


# map status to seed data for django
def status_to_fixture(status):
    # declare model and primary key
    fixture = {'model': 'api.tweet'}
    fixture['pk'] = int(status['id_str'])
    # initialize fields
    fields = {}
    fields['user_name'] = status['user']['name']
    fields['screen_name'] = status['user']['screen_name']
    fields['profile_image_url'] = status['user']['profile_image_url'].replace('\\', '')
    fields['text'] = status['text']
    fields['created_at'] = status['created_at'][4:10]
    # assign fields to fixture
    fixture['fields'] = fields
    return fixture


# wrapper for twitter api
def request_tweets():
    request_url = 'https://api.twitter.com/1.1/search/tweets.json?q=tapingo&count=100'
    statuses_str = oauth_req(request_url)
    statuses = json.loads(statuses_str).get('statuses', [])
    tweets = map(status_to_fixture, statuses)
    return tweets


# write to local file
with open('./fixtures/initdata.json', 'w+') as fo:
    json.dump(request_tweets(), fo, indent=2)
