import React, { useEffect, useState } from 'react';
import {Button, Divider, Icon} from "semantic-ui-react";
import './VideoMetadata.scss';
import {Rating} from '../Rating/Rating';
import { useAlert } from "react-alert";  
import { useDispatch } from 'react-redux';
import { addWishList } from '../../store/actions/addwishlist';
import { useSelector } from 'react-redux';

export function VideoMetadata(props) {
  
  const videos = useSelector((state) => state.wishlists.wishlists)||[]
const dispatch=useDispatch();
  const alert = useAlert();
  const [active,setactive]=useState(false)

  useEffect(()=>{
    for(let i=0;i<videos.length;i++){
      if(videos[i].id===props.video.id){
        setactive(true)
        break;
      }
    }
      },[])
  


  if (!props.video || !props.video.statistics) {
    return <div/>;
  }
  

  

  function handleadd(video) {
    // let videos = JSON.parse(localStorage.getItem("videos")) || [];
   
    // videos.push(video);
    // localStorage.setItem("videos", JSON.stringify(videos));
    console.log(video)
    dispatch(addWishList(video))
  }


  const viewCount = Number(props.video.statistics.viewCount).toLocaleString();

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

          <Button
          disabled={active}
            basic
            icon
            labelPosition="left"
            onClick={() => {
              setactive(true)
              alert.show("Video is added Successfully");
              handleadd(props.video);
            }}
          >
            <Icon name="list" />
            Wish List
          </Button>

            <Button basic icon>
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