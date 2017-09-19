import React from 'react';


const Tweet = ({ fields }) => {
  const { id, userName, screenName, text, profileImageUrl, createdAt } = fields;
  return (
    <div id={id} className='tweet-item'>
      <div className='item-left'>
        <img src={ profileImageUrl } alt="pofile-image"/>
      </div>
      <div className='item-right'>
        <div className='name-date'>
          <span>{ userName }</span>
          <a>@{ screenName }</a>
          <span>{ createdAt }</span>
        </div>
        <div className='text'>
          <p>{ text }</p>
        </div>
      </div>
    </div>
  );
};