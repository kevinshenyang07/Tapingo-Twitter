from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'$', views.TweetList.as_view(), name='tweet_list'),
]
