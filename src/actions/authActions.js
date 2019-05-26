import { AUTH_LOGIN, AUTH_SIGNUP, AUTH_FAILURE } from '../action-types';
import axios from '../config/axiosConfig';

export const loginSucess = (payload = {}, message = '') => ({
    type: AUTH_LOGIN,
    payload,
    message
});

export const authFailure = (payload) => ({
    type: AUTH_FAILURE,
    payload
});

export const signupSuccess = (payload = {}) => ({
    type: AUTH_SIGNUP,
    payload
});

export const loginUser = (data) => async (dispatch) => {
    try {
        const response = await axios.post('/auth/login', data);
        return dispatch(loginSucess(response.data.data[0].user, response.data.data[0].message));
    } catch (error) {
        return dispatch(authFailure(error.response.data));
    }
};

export const signupUser = (data) => async (dispatch) => {
    try {
        const response = await axios.post('/auth/signup', data);
        return dispatch(signupSuccess(response));
    } catch (error) {
        return dispatch(authFailure(error.response.data));
    }
};

