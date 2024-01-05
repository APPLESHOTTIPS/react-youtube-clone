import React from 'react';
import {Button, Divider, Icon} from "semantic-ui-react";
import './VideoMetadata.scss';
import {Rating} from '../Rating/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { watchLaterAction } from '../../store/actions/later';
import { likeVideo } from '../../store/actions/like';

export function VideoMetadata(props) {
  const dispatch = useDispatch()
  if (!props.video || !props.video.statistics) {
    return <div/>;
  }
  const viewCount = Number(props.video.statistics.viewCount).toLocaleString();
  return (
    <div className='video-metadata'>
      <h3>{props.video.snippet.title}</h3>
      <div className='video-stats'>
        <span>{viewCount} views</span>
        <div className='video-actions' >
          <Rating  likeCount={props.video.statistics.likeCount}
                  dislikeCount={props.video.statistics.dislikeCount} video={props.video}/>
          <Button basic icon labelPosition='left'>
            <Icon name='share'/>
            Share
          </Button>
          <Button basic icon onClick={()=>dispatch(watchLaterAction(props.video))}>
            <Icon name='add circle' />
          </Button>
          <Button basic icon>
            <Icon name='ellipsis horizontal' />
          </Button>
        </div>
      </div>
      <Divider/>
    </div>
  );
}