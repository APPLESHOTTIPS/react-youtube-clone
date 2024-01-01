import React, { useEffect, useState } from 'react';
import {Button, Divider, Icon} from "semantic-ui-react";
import './VideoMetadata.scss';
import {Rating} from '../Rating/Rating';

export function VideoMetadata(props) {
  const [added, isAdded] = useState(false)
  
  const viewCount = Number(props.video.statistics.viewCount).toLocaleString();
  console.log(props.video, 'of video meta deta')
  const VideoPreviews = []
  function addToWatchlater(){  
    if(!localStorage.getItem('VideoPreviews')){
      let VideoPreviewsstring = JSON.stringify(VideoPreviews)
      localStorage.setItem('VideoPreviews', VideoPreviewsstring)
      console.log('VideoPreviews', VideoPreviewsstring, VideoPreviews)
    }
      var storedData = localStorage.getItem('VideoPreviews');
      var videos = JSON.parse(storedData);
      videos.push(props.video)
      var jsonString = JSON.stringify(videos);
      localStorage.setItem('VideoPreviews', jsonString);
      isAdded(true)
      alert('no message')
  }
  // let partOfWatchlater = 0;
  // let extra = 0;
  // let outputVideos = localStorage.getItem('VideoPreviews');
  // let VideoPreviewsOutput = JSON.parse(outputVideos);
  // if(VideoPreviewsOutput){
  //   VideoPreviewsOutput.find((videos)=>(
  //     videos.id==props.video.id ? partOfWatchlater = 1: extra = 0
  //     ))
  //     console.log(props.video.id, partOfWatchlater)
  //   }
    useEffect(()=>{
  let outputVideos = localStorage.getItem('VideoPreviews');
  let VideoPreviewsOutput = JSON.parse(outputVideos);
  if(VideoPreviewsOutput){
    VideoPreviewsOutput.find((videos)=>(
      videos.id==props.video.id && isAdded(true)
      ))
    }
    },[])
    if (!props.video || !props.video.statistics) {
      return <div/>;
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
          { added? (<Button color="green">
    <Icon name="check" />
    Added to Watch later
  </Button>) :
          ( <Button basic icon onClick={addToWatchlater}>
            <Icon name='add circle' />
          </Button>)}
          <Button basic icon>
            <Icon name='ellipsis vertical' />
          </Button>
        </div>
      </div>
      <Divider/>
    </div>
  );
}