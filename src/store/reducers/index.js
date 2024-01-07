import apiReducer from './api';
import {combineReducers} from 'redux';
import videosReducer from './videos'
import channelsReducer from './channels';
import commentsReducer from './comments';
import searchReducer from './search';
import wishlistReducer from './addwishlist';
export default combineReducers({
  api: apiReducer,
  videos: videosReducer,
  channels: channelsReducer,
  comments: commentsReducer,
  search: searchReducer,
  wishlists: wishlistReducer,
});