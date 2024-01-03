import React from "react";
import { SideBar } from '../../containers/SideBar/SideBar';
import VideoGridHeader from '../../components/VideoGrid/VideoGridHeader/VideoGridHeader'
import { VideoPreview } from "../../components/VideoPreview/VideoPreview";
import { useSelector } from 'react-redux'

export default function Test() {
    console.log('hello this is watch later page')
    const video =
    {
        "id": "UyFb45x_zgA",
        "snippet": {
            "publishedAt": "2023-12-27T19:03:33Z",
            "channelId": "UC7McHNOsrUL2fRxTB_xvgRQ",
            "title": "Tommy Smothers Walks Out As Johnny | Carson Tonight Show",
            "thumbnails": {
                "medium": {
                    "url": "https://i.ytimg.com/vi/UyFb45x_zgA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                }
            },
            "channelTitle": "Johnny Carson"
        },
        "contentDetails": {
            "duration": "PT13M24S"
        },
        "statistics": {
            "viewCount": "712836"
        }
    }


    // var storedData = localStorage.getItem('myData');
    // var video = JSON.parse(storedData);

    // const VideoPreviews = []

    // var counter = parseInt(localStorage.getItem('count'))
    // console.log(counter, 'number of watch later videos')
//     if(counter==0){
//         VideoPreviews.push(<div></div>)
//     }
//     else{
//     let i = 1;
//     for (i = 1; i <= counter; i++) {
//         var storedData = localStorage.getItem(i);
//         var videos = JSON.parse(storedData);
//         VideoPreviews.push(
            // <VideoPreview horizontal={true} expanded={true} video={videos} key={videos.id} pathname={'/watch'}
            //             search={'?v=' + videos.id} />
//         )
//         console.log(videos, 'index position: ', i)
//         console.log(VideoPreviews, 'after pushing:', i, 'index')
//     }
// }


    // let outputVideos = localStorage.getItem('VideoPreviews');
    // let VideoPreviews = JSON.parse(outputVideos);


    const VideoPreviews = useSelector((state)=>state.watchlater)
    console.log('watchlater page', VideoPreviews)

    return (
        <>
            <SideBar />
            <div className='home-content'>
                <div className="responsive-video-grid-container">
                    {/* <VideoPreview horizontal={true} expanded={true} video={videos} key={videos.id} pathname={'/watch'}
                        search={'?v=' + videos.id} /> */}
                    {/* {VideoPreviews} */}
                    {VideoPreviews?.map((videos)=>(
                         <VideoPreview horizontal={true} expanded={true} video={videos} key={videos.id} pathname={'/watch'}
                         search={'?v=' + videos.id} />
                    ))}
                </div>
            </div>
        </>
    )
}