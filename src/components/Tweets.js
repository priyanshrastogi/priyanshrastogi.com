import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function Tweets() {
  return (
    <div className='twitter'>
      <div className='col-md-4 offset-md-4'>
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='priyanshx7'
          options={{height: 400}}
          noScrollbar
          transparent
        />
      </div>
    </div>
  )
}