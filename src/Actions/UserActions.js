import axios from 'axios';
import { USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOGIN_REQUEST, USER_LOGOUT } from '../Constants/UserConstants';


export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type:USER_LOGIN_REQUEST
        })

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post('https://jsonplaceholder.typicode.com/posts',{
            title: 'foo',
            body: 'bar',
            userId: 1,
        },config);

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data,
        })
        localStorage.setItem('userInfo',JSON.stringify(data));

    }catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.message,
        })
    }
}