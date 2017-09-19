# Tapingo-Twitter

### Architecture

Django / Django-REST-Framework: full funcionalities with clean implementation
React: flexible and fast

data flow: In this project the tweets are not extracted rountinely. The script ```initdata.py``` calls the Twitter api and save the tweets in Django fixtures, then loaded to data store. With the implementation of a REST API, whenever the frontend is calling it will go through the APIView of ```TweetList```, processed by ```TweetSerializer``` and a JSON will be sent in proper format.

### Decisions

Trade-off using Django/DRF: Too heavy if the application only takes hundreds of tweets, takes longer to set up and deploy than other lightweight frameworks.

Trade-off using React: Also takes longer to set up and deploy, but other than that, it's great.

Trade-off loading all tweets at once: takes longer at first to load and parse response, less time to switch to pages.


### Notes

1. For the limit of time frontend tests are not covered.
2. The Twitter Search API only provide hashtag tweets in last 7 days, which is less than 20 tweets for #tapingo, so I broadened the search range to all tweets that mention tapingo.
3. Need to compile the bundled Javascript to production build.

