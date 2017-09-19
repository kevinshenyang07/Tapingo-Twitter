import React from 'react';





var TweetList = React.createClass({
    getInitialState: function() {
        return {data: []};
    },


    render: function() {
        if (this.state.data) {
            console.log('DATA!')
            var bookNodes = this.state.data.map(function(book){
                return <li> {book.title} </li>
            })
        }
        return (
            <div>
                <h1>Hello React!</h1>
                <ul>
                    {bookNodes}
                </ul>
            </div>
        )
    }
})


