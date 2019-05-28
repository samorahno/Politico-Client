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

export const signupSuccess = (payload = {}, message = '') => ({
    type: AUTH_SIGNUP,
    payload,
    message
});

export const loginUser = (data) => async (dispatch) => {
    try {
        const response = await axios.post('/auth/login', data);
        const { user, message } = response.data.data[0];
        return dispatch(loginSucess(user, message));
    } catch (error) {
        return dispatch(authFailure(error.response.data));
    }
};

export const signupUser = (data) => async (dispatch) => {
    try {
        const response = await axios.post('/auth/signup', data);
        const { message } = response.data;
        const { user } = response.data.data[0];
        return dispatch(signupSuccess(user, message));
    } catch (error) {
        return dispatch(authFailure(error.response.data));
    }
};
