import React from 'react';
import {Button, Divider, Icon} from "semantic-ui-react";
import './VideoMetadata.scss';
import {Rating} from '../Rating/Rating';

export function VideoMetadata(props) {
  if (!props.video || !props.video.statistics) {
    return <div/>;
  }
  const viewCount = Number(props.video.statistics.viewCount).toLocaleString();
  console.log(props.video, 'of video meta deta')
  function addToWatchlater(){  
      let counter = parseInt(localStorage.getItem('count'))+1;
      var jsonString = JSON.stringify(props.video);
      localStorage.setItem(counter, jsonString);
      localStorage.setItem('count',counter)
      alert('video is added to watchlater')

  }
  return (
    <div className='video-metadata'>
      <h3>{props.video.snippet.title}</h3>
      <div className='video-stats'>
        <span>{viewCount} views</span>
        <div className='video-actions' >
          <Rating likeCount={props.video.statistics.likeCount}
                  dislikeCount={props.video.statistics.dislikeCount}/>
          <Button basic icon labelPosition='left'>
            <Icon name='share'/>
            Share
          </Button>
          <Button basic icon onClick={addToWatchlater}>
            <Icon name='add circle' />
          </Button>
          <Button basic icon>
            <Icon name='ellipsis vertical' />
          </Button>
        </div>
      </div>
      <Divider/>
    </div>
  );
}