import React from 'react';

import Tweet from 'tweet';

class TweetList extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        tweets: [],
        currentPage: 1,
        tweetsPerPage: 20
      };

      this.handleClick = this.handleClick.bind(this);
      this.loadTweetsFromServer = this.loadTweetsFromServer.bind(this);
      this.getCurrentPageTweets = this.getCurrentPageTweets.bind(this);
    }

    componentDidMount() {
      this.loadTweetsFromServer(this.props.url);
    }

    handleClick(e) {
      this.setState();
    }

    loadTweetsFromServer(url) {
      $.ajax({
        url: url,
        datatype: 'json',
        success: data => {
          this.setState({ tweets: data });
        }
      });
    }

    getCurrentPageTweetComponents() {
      const { tweets, currentPage, tweetsPerPage } = this.state;

      const firstIndex = (currentPage - 1) * tweetsPerPage;
      const lastIndex = firstIndex + 19;
      const currentTweets = tweets.slice(firstIndex, lastIndex);

      const tweetComponents = currentTweets.map(tweet => {
        return <Tweet fields={tweet} />;
      });

      return tweetComponents;
    }

    render() {
      const { tweets, currentPage, tweetsPerPage } = this.state;
      if (tweets.length !== 0) {
        const tweetComponents = this.getCurrentPageTweets();
      }
    }

}

