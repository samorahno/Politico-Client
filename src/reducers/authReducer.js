import { AUTH_LOGIN, AUTH_SIGNUP, AUTH_FAILURE } from '../action-types';

const initialState = {};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                ...action.payload,
                message: action.message,
                isAuthenticated: true
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
                isAuthenticated: false
            };
        default:
            return state;
    }
};
