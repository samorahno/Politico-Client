import { AUTH_LOGIN, AUTH_SIGNUP, AUTH_FAILURE, CLEAR_AUTH_ERROR } from '../action-types';

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
        default:
            return state;
    }
};
