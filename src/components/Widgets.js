import React from 'react';
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
 

function Widgets() {
  return (
    <div className='Widgets'>
        <div className='widgets__input'>
            <SearchIcon className="widgets__searchIcon"/>
            <input placeholder='search Twitter' type='text'></input>
        </div>
      <div className='widgets__widgetContainer'>
        <h2>What's Happening</h2>

        <TwitterTweetEmbed tweetId={"1648623614411898881"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="RinnyVeron1435"
          options={{ height: 400 }}
        />

<TwitterShareButton
          url={"https://twitter.com/RinnyVeron1435"}
          options={{ text: "#Escape the ordinary.", via: "RinnyVeron1435" }}
        />


      </div>
    </div>
  )
}

export default Widgets
