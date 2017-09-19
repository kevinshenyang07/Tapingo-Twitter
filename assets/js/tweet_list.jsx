import React from 'react';
import Tweet from './tweet';


class TweetList extends React.Component {
    constructor(props) {
      super(props);
      // initialize state
      this.state = {
        tweets: [],
        currentPage: 1,
        tweetsPerPage: 20
      };
      // bind context on methods
      this.handleClick = this.handleClick.bind(this);
      this.handleNextPage = this.handleNextPage.bind(this);
      this.loadTweetsFromServer = this.loadTweetsFromServer.bind(this);
      this.createCurrentTweetComponents = this.createCurrentTweetComponents.bind(this);
      this.createPagination = this.createPagination.bind(this);
    }

    componentDidMount() {
  
      this.loadTweetsFromServer(this.props.url).then(data => {
        // handle on success situation
        const { tweetsPerPage } = this.state;
        const tweetsByPage = [];
        const numPages = Math.ceil(data.length / tweetsPerPage);
        // divide tweets by page
        for (let i = 0; i < numPages; i++) {
          const tweetSlice = data.slice(i * tweetsPerPage, (i + 1) * tweetsPerPage);
          tweetsByPage.push(tweetSlice);
        }
        this.setState({ tweets: tweetsByPage, numPages });
      });
    }

    handleClick(e) {
      // update currentPage info, trigger rerender
      this.setState({ currentPage: parseInt(e.target.id) });
    }

    handleNextPage(e) {
      // jump to next page's tweets
      const currentPage = this.state.currentPage;
      if (currentPage !== this.state.numPages) {
        this.setState({ currentPage: currentPage + 1 });
      }
    }

    loadTweetsFromServer(url) {
      // standard ajax call
      return $.ajax({
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
        return <Tweet key={tweet.id} fields={tweet} />;
      });

      return tweetComponents;
    }

    createPagination() {
      const { numPages } = this.state;
      const pages = [];
      for (let i = 0; i < numPages; i++) {
        pages.push(i + 1);
      }
      // map page numbers to links
      const pageLinks = pages.map(i => {
        return (
          <li 
            key={i} id={i} className='page'
            onClick={this.handleClick}>
            {i}
          </li>); 
      });
      // add an extra 'next' link
      pageLinks.push(
        <li key={numPages+1} id={numPages+1}
          className='page' onClick={this.handleNextPage}>
          Next
        </li>
      );
      return pageLinks;
    }

    render() {
      const { tweets, currentPage, tweetsPerPage } = this.state;

      if (tweets.length !== 0) {
        // render all child components
        const tweetComponents = this.createCurrentTweetComponents();
        const pagination = this.createPagination();
        return (
          <div className="background">
            <div className="container">
              <h2>Tapingo Twitter Assignment</h2>
              <ul id="tweet-list">{tweetComponents}</ul>
              <ul id="page-numbers">{pagination}</ul>
            </div>
          </div>

        );
      } else {
        // loading effect in the future
        return (<div></div>);
      }
    }

}

export default TweetList;