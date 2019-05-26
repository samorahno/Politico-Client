import { AUTH_LOGIN, AUTH_SIGNUP, AUTH_FAILURE } from '../action-types';

const initialState = {};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                ...action.payload,
                message: action.message
            };
        case AUTH_SIGNUP:
            return {
                ...state,
                ...action.payload,
                message: action.message
            };
        case AUTH_FAILURE:
            return {
                message: action.message
            };
        default:
            return state;
    }
};
