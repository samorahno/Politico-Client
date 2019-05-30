import { CREATE_OFFICE_SUCCESS, CREATE_OFFICE_FAILURE, GET_OFFICE_SUCCESS, GET_OFFICE_FAILURE } from '../action-types';

const initialState = {};
export const officeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_OFFICE_SUCCESS:
            return {
                ...state,
                office: state.office.concat([action.payload]),
                message: action.message,
                createOfficeError: false
            };
        case CREATE_OFFICE_FAILURE:
            return {
                ...state,
                ...action.payload,
                message: action.message,
                createOfficeError: true
            };
        case GET_OFFICE_SUCCESS:
            return {
                ...state,
                office: action.payload
            };
        case GET_OFFICE_FAILURE:
            return {
                ...state,
                ...action.payload,
                message: action.message
            };
        default:
            return state;
    }
};

