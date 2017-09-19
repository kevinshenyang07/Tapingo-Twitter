import React from 'react';

const strToLink = (string) => {
  let href = "";
  // add link to mention
  if (string.startsWith('@')) {
    const mention = string.slice(1);
    href = "https://twitter.com/" + mention;
    return <a href={href}>{string}</a>;
  // add link to hashtag
  } else if (string.startsWith('#')) {
    const tag = string.slice(1);
    href = "https://twitter.com/hashtag/" + tag;
    return <a href={href}>{string}</a>;
  // add link to url
  } else if (string.startsWith('http')) {
    return <a href={string}>{string}</a>;
  }
};

const Tweet = ({ fields }) => {
  const { id, userName, screenName, text, profileImageUrl, createdAt } = fields;
  const words = text.split(" ").map(word => strToLink(word));
  return (
    <li key={ id } className='tweet-item'>
      <div className='item-left'>
        <img src={ profileImageUrl } alt="pofile-image"/>
      </div>
      <div className='item-right'>
        <div className='name-date'>
          <span>{ userName }</span>
          { strToLink("@" + screenName) }
          <span>{ createdAt }</span>
        </div>
        <div className='text'>
          <p>{ words }</p>
        </div>
      </div>
    </li>
  );
};

export default Tweet;