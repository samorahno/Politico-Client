import { AUTH_LOGIN, AUTH_SIGNUP, AUTH_FAILURE, CLEAR_AUTH_ERROR, AUTH_LOGOUT } from '../action-types';

const initialState = {};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                ...action.payload,
                message: action.payload.message,
                isAuthenticated: true,
                authError: false
            };
        case AUTH_SIGNUP:
            return {
                ...state,
                ...action.payload,
                message: action.message,
                isAuthenticated: true
            };
        case AUTH_FAILURE:
            return {
                ...state,
                message: action.payload,
                isAuthenticated: false,
                authError: true
            };
        case CLEAR_AUTH_ERROR:
            return {
                ...state,
                authError: false
            };
        case AUTH_LOGOUT:
            return {
                ...initialState,
                isAuthenticated: false
            };
        default:
            return state;
    }
};
