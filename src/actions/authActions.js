import { AUTH_LOGIN, AUTH_SIGNUP, AUTH_FAILURE, CLEAR_AUTH_ERROR } from '../action-types';
import axios from '../config/axiosConfig';

export const loginSucess = (user, message, token) => ({
    type: AUTH_LOGIN,
    payload: { user, message, token }
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

export const clearAuthError = () => ({
    type: CLEAR_AUTH_ERROR
});

export const loginUser = (data) => async (dispatch) => {
    try {
        const response = await axios.post('/auth/login', data);
        const { user, message, token } = response.data.data[0];
        return dispatch(loginSucess(user, message, token));
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
