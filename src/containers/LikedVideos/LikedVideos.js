import React from 'react'
import { useContext } from 'react'
import { CommonArrayContext } from '../../App'
import { VideoPreview } from '../../components/VideoPreview/VideoPreview'
import { VideoGridHeader } from '../../components/VideoGrid/VideoGridHeader/VideoGridHeader'
import { SideBar } from '../SideBar/SideBar'
import { useSelector } from 'react-redux'
import './LikedVideos.scss'

export const LikedVideos = () => {
    // console.log("sdfg");
    // console.log(store)
    // var commArray1 = useContext(CommonArrayContext)  
    const videoArray = useSelector((state)=>state.like)
    // console.log("pp")
    // console.log(videoArray)
    // console.log(videoArray)
    // const fun = commArray1['addItem']
    // console.log("Inside watch later")
    // console.log(commArray1['commonArray'])
    // const add=()=>{
    //     fun('sdf')
    // }
    // const videos = JSON.parse(localStorage.getItem('watchLaterVideos'))
    // console.log(localStorage.getItem('watchLaterVideos'))
    // console.log(videos)
    // var vids= commArray1['commonArray']
    var vidIds =new Set()
    const gridItems = videoArray.map(video => {
        var sz=vidIds.size
        console.log(sz)
        return ((vidIds.add(video.id).size!=sz)?<VideoPreview video={video}   
                              key={video.id}
                              pathname='/watch'
                              search={`?v=${video.id}`}
                              />:<></>
        )});
    console.log(vidIds)
  return (
    <>
    <React.Fragment>
    <div className='body-divs'>
    <SideBar/>
    <div className='griditems'>
    <VideoGridHeader title={"Liked Videos"}/>
    {gridItems}
    </div>
    </div>
    </React.Fragment>
    </>
  )
}

export default LikedVideos