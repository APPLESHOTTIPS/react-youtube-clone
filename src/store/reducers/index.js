import apiReducer from './api';
import {combineReducers} from 'redux';
import videosReducer from './videos'
import channelsReducer from './channels';
import commentsReducer from './comments';
import searchReducer from './search';
import later from './later'
import like from './like'

export default combineReducers({
  api: apiReducer,
  videos: videosReducer,
  channels: channelsReducer,
  comments: commentsReducer,
  search: searchReducer,
  later: later,
  like: like
});