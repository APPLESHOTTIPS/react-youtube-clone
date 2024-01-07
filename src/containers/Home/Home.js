import React from 'react';
import {connect} from "react-redux";
import * as videoActions from "../../store/actions/video";
import './Home.scss';
import {SideBar} from '../SideBar/SideBar';
import HomeContent from './HomeContent/HomeContent';
import {bindActionCreators} from 'redux';
import {getYoutubeLibraryLoaded} from '../../store/reducers/api';
import {getVideoCategoryIds, videoCategoriesLoaded, videosByCategoryLoaded} from '../../store/reducers/videos';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIndex: 0,
    };
  }

  render() {
    return (
      <React.Fragment>
        <SideBar/>
        <HomeContent
          bottomReachedCallback={this.bottomReachedCallback}
          showLoader={this.shouldShowLoader()}/>
      </React.Fragment>
    );
  }

  componentDidMount() {
    console.log("fetching mostpopularVideos and VideosCategories 1 but not youtubeLibraryLoaded is false")
    if (this.props.youtubeLibraryLoaded) {
     
      this.fetchCategoriesAndMostPopularVideos();
      
    }
  }

  componentDidUpdate(prevProps) {
   
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded || !this.props.location ) {
      console.log("featching mostpopularVideos and VideosCategories 2")
      this.fetchCategoriesAndMostPopularVideos();
      
    } else if (this.props.videoCategories !== prevProps.videoCategories) {
      console.log("fetching videosbycetegories 2")
      this.fetchVideosByCategory();
    
    }
  }

  fetchVideosByCategory() {
    console.log("getting mostpopular videos by there cetegories with respect to category indexes")
    const categoryStartIndex = this.state.categoryIndex;
    const categories = this.props.videoCategories.slice(categoryStartIndex, categoryStartIndex + 3);
    this.props.fetchMostPopularVideosByCategory(categories);
    this.setState(prevState => {
      return {
        categoryIndex: prevState.categoryIndex + 3,
      };
    });
  }

  fetchCategoriesAndMostPopularVideos() {
    console.log("getting mostpopularVideos and VideosCategories")
    this.props.fetchMostPopularVideos();
    this.props.fetchVideoCategories();
  }

  bottomReachedCallback = () => {
   console.log("fecthing videosbycetegories 1")
    if (!this.props.videoCategoriesLoaded) {
      return;
    }
    this.fetchVideosByCategory();
  };

  shouldShowLoader() {
    if (this.props.videoCategoriesLoaded && this.props.videosByCategoryLoaded) {
      return this.state.categoryIndex < this.props.videoCategories.length;
    }
    return false;
  }
}

function mapStateToProps(state) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    videoCategories: getVideoCategoryIds(state),
    videoCategoriesLoaded: videoCategoriesLoaded(state),
    videosByCategoryLoaded: videosByCategoryLoaded(state),
  };
}

function mapDispatchToProps(dispatch) {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
  const fetchVideoCategories = videoActions.categories.request;
  const fetchMostPopularVideosByCategory = videoActions.mostPopularByCategory.request;
  return bindActionCreators({fetchMostPopularVideos, fetchVideoCategories, fetchMostPopularVideosByCategory}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);