import { CREATE_PARTY_SUCCESS,
    CREATE_PARTY_FAILURE,
    GET_PARTY_SUCCESS,
    GET_PARTY_FAILURE
} from '../action-types';
import axios from '../config/axiosConfig';

export const createPartySuccess = (payload = {}, message = '') => ({
    type: CREATE_PARTY_SUCCESS,
    payload,
    message
});

export const createPartyFailure = (payload) => ({
    type: CREATE_PARTY_FAILURE,
    payload
});

export const getPartySuccess = (payload = {}, message = '') => ({
    type: GET_PARTY_SUCCESS,
    payload,
    message
});

export const getPartyFailure = (payload) => ({
    type: GET_PARTY_FAILURE,
    payload
});

export const createParty = (data) => async (dispatch) => {
    try {
        const response = await axios.post('/parties', data);
        return dispatch(createPartySuccess(response.data.data[0], response.data.message));
    } catch (error) {
        return dispatch(createPartyFailure(error.response.data));
    }
};

export const getParty = () => async (dispatch) => {
    try {
        const response = await axios.get('/parties');
        const partiesArray = Object.values(response.data.data);
        return dispatch(getPartySuccess(partiesArray));
    } catch (error) {
        return dispatch(getPartyFailure(error.response.data));
    }
};
