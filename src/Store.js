import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './Reducers/UserReducers'

const reducer = combineReducers({
    userLogin : userLoginReducer,
});

const userInfoFromLocalStorage = JSON.parse(localStorage.getItem('userInfo')) || null;
console.log(userInfoFromLocalStorage);
const initialState = {
    userLogin : {userInfo:userInfoFromLocalStorage}
}; 
const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));


export default store;