import { createStore } from "redux";
import Rootreducer from '../reducers/index'
const store = createStore(Rootreducer)
export default store;