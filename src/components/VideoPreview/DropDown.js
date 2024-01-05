import React from 'react'
import { watchLaterAction } from '../../store/actions/later'
import { likeVideo } from '../../store/actions/like'
import { Icon } from 'semantic-ui-react'
import './DropDown.scss'
import { useDispatch } from 'react-redux'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const DropDown = (props) => {
    const dispatch = useDispatch()
    console.log("sdf")
    console.log(props.video)
    
  return (
    <div class="dropdown">
    <button class="dropbtn"><Icon size='small' name={'ellipsis vertical'}/><a href="https://www.google.com/"/></button>
    <div id="myDropdown" class="dropdown-content">
        <a  onClick={()=>dispatch(likeVideo(props.video))}>Like</a>
        <a onClick={()=>dispatch(watchLaterAction(props.video))}>Add to watch Later</a>
        <Popup trigger={<a>Share this video</a>} position="right center">
            <div>Share this url: https://www.youtube.com/watch{props.url}</div>
        </Popup>
    </div>
    </div>

  )
}

export default DropDown