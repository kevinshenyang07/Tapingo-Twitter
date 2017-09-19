import React from 'react';
import ReactDOM from 'react-dom';
import TweetList from './tweet_list';


const root = document.getElementById('root');
ReactDOM.render(<TweetList url='/api/' />, root);