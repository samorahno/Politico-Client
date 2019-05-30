import { CREATE_PARTY_SUCCESS, CREATE_PARTY_FAILURE, GET_PARTY_SUCCESS, GET_PARTY_FAILURE } from '../action-types';

const initialState = {};
export const partyReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PARTY_SUCCESS:
            return {
                ...state,
                party: state.party.concat([action.payload]),
                message: action.message,
                createPartyError: false
            };
        case CREATE_PARTY_FAILURE:
            return {
                ...state,
                ...action.payload,
                message: action.message,
                createPartyError: true
            };
        case GET_PARTY_SUCCESS:
            return {
                ...state,
                party: action.payload
            };
        case GET_PARTY_FAILURE:
            return {
                ...state,
                ...action.payload,
                message: action.message
            };
        default:
            return state;
    }
};

