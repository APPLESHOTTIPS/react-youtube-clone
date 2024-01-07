import React from 'react';
import {bindActionCreators} from 'redux';
import * as watchActions from '../../store/actions/watch';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getYoutubeLibraryLoaded} from '../../store/reducers/api';
import WatchContent from './WatchContent/WatchContent';
import {getSearchParam} from '../../services/url';
import {getChannelId} from '../../store/reducers/videos';
import {getCommentNextPageToken} from '../../store/reducers/comments';
import * as commentActions from '../../store/actions/comment';


export class Watch extends React.Component {
  render() {
    const videoId = this.getVideoId();
    return (
      <WatchContent videoId={videoId} channelId={this.props.channelId} bottomReachedCallback={this.fetchMoreComments}
                    nextPageToken={this.props.nextPageToken}/>
    );
  }

  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.fetchWatchContent();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.fetchWatchContent();
      // this.fetchCategoriesAndMostPopularVideos();
    }
  }

  // fetchCategoriesAndMostPopularVideos() {
  //   console.log("getting mostpopularVideos and VideosCategories")
  //   this.props.fetchMostPopularVideos();
  //   this.props.fetchVideoCategories();
  // }

  getVideoId() {
    return getSearchParam(this.props.location, 'v');
  }

  componentDidMount() {
    
    const { location } = this.props;
    if((location !== null || location !== undefined) && location)
    localStorage.setItem('lastLocation', JSON.stringify(location));
  }

  fetchWatchContent() {
    const videoId = this.getVideoId();
    if (!videoId) {
      this.props.history.push('/');
    }
    const lastId =localStorage.getItem("lastLocation")
    console.log("arv101",lastId)
    this.props.fetchWatchDetails(videoId, this.props.channelId);
  }

  fetchMoreComments = () => {
    if (this.props.nextPageToken) {
      this.props.fetchCommentThread(this.getVideoId(), this.props.nextPageToken);
    }
  };
}

function mapStateToProps(state, props) {
  return {
    ...state,
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state,props),
    channelId: getChannelId(state, props.location, 'v'),
    nextPageToken: getCommentNextPageToken(state, props.location),
  };
}

function mapDispatchToProps(dispatch) {
  const fetchWatchDetails = watchActions.details.request;
  const fetchCommentThread = commentActions.thread.request;
  return bindActionCreators({fetchWatchDetails, fetchCommentThread}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));