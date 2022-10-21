import React, { useEffect } from "react";
import { VideoPreview } from "../../components/VideoPreview/VideoPreview";
import {SideBar} from "../SideBar/SideBar"
import { addWishList } from "../../store/actions/addwishlist";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const WishList = ({showwishlist,videos}) => {
 
  useEffect(()=>{
    let wishlistvideos=JSON.parse(localStorage.getItem("videos"))|[]

    console.log("wishlistvideos",JSON.parse(localStorage.getItem("videos")))

    if(wishlistvideos.length){
      console.log(showwishlist)
      showwishlist(wishlistvideos)
    }
  },[])
  
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

function mapStateToProps(state) {
    
  return {
    videos: state.wishlists.wishlists,
    
   
  };
}

function mapDispatchToProps(dispatch){
  console.log("dispatch",dispatch)
  return{
    showwishlist:(wishlist)=>dispatch(addWishList(wishlist))
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WishList));
