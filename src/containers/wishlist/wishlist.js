import React from "react";
import { VideoPreview } from "../../components/VideoPreview/VideoPreview";
import {SideBar} from "../SideBar/SideBar"
import { useSelector } from "react-redux";
const WishList = () => {
  
  // let videos = JSON.parse(localStorage.getItem("videos")) || [];

  const videos = useSelector((state) => state.wishlists.wishlists)||[]
  
  return (
    <div>
      <React.Fragment>
        <SideBar/>
    <div className="mainbody" style={{ margin: "100px 300px", width: "70%" }}>
      {videos.length === 0 ? (
        <h1>Currently there is no List </h1>
      ) : (
        videos.map((video) => (
          <VideoPreview
            horizontal={true}
            expanded={true}
            video={video}
            key={video.id}
            pathname={"/watch"}
            search={"?v=" + video.id}
          />
        ))
      )}
    </div>
    </React.Fragment>
    </div>
  );
};

export default WishList;
