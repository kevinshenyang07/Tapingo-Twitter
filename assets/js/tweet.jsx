import React from 'react';


const strToLink = (string, index) => {
  let href = "";
  // add link to mention
  if (string.startsWith('@')) {
    const mention = string.slice(1);
    href = "https://twitter.com/" + mention;
    return <span><a key={index} href={href}>{string}</a> </span>;
  // add link to hashtag
  } else if (string.startsWith('#')) {
    const tag = string.slice(1);
    href = "https://twitter.com/hashtag/" + tag;
    return <span><a key={index} href={href}>{string}</a> </span>;
  // add link to url
  } else if (string.startsWith('http')) {
    return <span><a key={index} href={string}>{string}</a> </span>;
  // keep non-link text
  } else {
    return string + " ";
  }
};

const Tweet = ({ fields }) => {
  const { id, userName, screenName, text, profileImageUrl, createdAt } = fields;
  // split a sentence to words and links
  const words = text.split(" ").map((word, i) => strToLink(word, i));
  
  return (
    <li key={ id } className='tweet-item'>
      <div className='item-left'>
        <img src={ profileImageUrl } alt="pofile-image"/>
      </div>
      <div className='item-right'>
        <div className='name-date'>
          <span>{ userName }</span>
          { strToLink("@" + screenName, 0) }
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