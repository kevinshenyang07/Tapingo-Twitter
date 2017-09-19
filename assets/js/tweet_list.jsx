import React from 'react';

import Tweet from 'tweet';

class TweetList extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        tweets: []
      };

      this.loadTweetsFromServer = this.loadTweetsFromServer.bind(this);
    }

    componentDidMount() {
      this.loadTweetsFromServer(this.props.url);
    }

    loadTweetsFromServer(url) {
      $.ajax({
        url: url,
        datatype: 'json',
        cache: false,
        success: data => {
          this.setState({ tweets: data });
        }
      });
    }

    render() {
      if (this.state.tweets.length !== 0) {
        // do sth
      }
    }

}

