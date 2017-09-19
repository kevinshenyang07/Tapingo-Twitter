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
      this.createCurrentTweetComponents = this.createCurrentTweetComponents.bind(this);
      this.createPagination = this.createPagination.bind(this);
    }

    componentDidMount() {
      this.loadTweetsFromServer(this.props.url).then(data => {
        // handle on success situation
        const { tweetsPerPage } = this.state;
        const tweetsByPage = [];
        const numPages = parseInt(data.length / tweetsPerPage) + 1;
        // divide tweets by page
        for (let i = 0; i < numPages - 1; i++) {
          const tweetSlice = data.slice(i * tweetsPerPage, (i + 1) * tweetsPerPage);
          tweetsByPage.push(tweetSlice);
        }
        this.setState({ tweets: tweetsByPage, numPages });
      });
    }

    handleClick(e) {
      this.setState({ currentPage: parseInt(e.target.id) });
    }

    loadTweetsFromServer(url) {
      $.ajax({
        method: 'GET',
        url: url,
        datatype: 'json',
      });
    }

    createCurrentTweetComponents() {
      // deconstruct state object
      const { tweets, currentPage, tweetsPerPage } = this.state;
      // get tweets by page, index starts from 0
      const tweetComponents = tweets[currentPage-1].map(tweet => {
        return <Tweet fields={tweet} />;
      });

      return tweetComponents;
    }

    createPagination() {
      const { numPages } = this.state;
      const pages = [];
      for (let i = 0; i < numPages; i++) {
        pages.push(i + 1);
      }
      const pageLinks = pages.map(i => {
        return (
          <li key={i} id={i} onClick={this.handleClick}>
            i
          </li>); 
      });
      pageLinks.push(<li></li>);
      return (
        <ul className='pagination'>
          { pageLinks }
        </ul>
      );
    }

    render() {
      const { tweets, currentPage, tweetsPerPage } = this.state;
      if (tweets.length !== 0) {
        const tweetComponents = this.createCurrentPageTweets();
        const pagination = this.createPagination();
        return (
          <div>
            <ul>{ tweetComponents }</ul>
            <ul>{ pagination }</ul>
          </div>
        );
      }
    }

}

