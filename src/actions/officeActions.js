import { CREATE_OFFICE_SUCCESS,
    CREATE_OFFICE_FAILURE,
    GET_OFFICE_SUCCESS,
    GET_OFFICE_FAILURE
} from '../action-types';
import axios from '../config/axiosConfig';

export const createOfficeSuccess = (payload = {}, message = '') => ({
    type: CREATE_OFFICE_SUCCESS,
    payload,
    message
});

export const createOfficeFailure = (payload) => ({
    type: CREATE_OFFICE_FAILURE,
    payload
});

export const getOfficeSuccess = (payload = {}, message = '') => ({
    type: GET_OFFICE_SUCCESS,
    payload,
    message
});

export const getOfficeFailure = (payload) => ({
    type: GET_OFFICE_FAILURE,
    payload
});

export const createOffice = (data) => async (dispatch) => {
    try {
        const response = await axios.post('/offices', data);
        return dispatch(createOfficeSuccess(response.data.data[0], response.data.message));
    } catch (error) {
        return dispatch(createOfficeFailure(error.response.data));
    }
};

export const getOffice = () => async (dispatch) => {
    try {
        const response = await axios.get('/offices');
        const officesArray = Object.values(response.data.data);
        return dispatch(getOfficeSuccess(officesArray));
    } catch (error) {
        return dispatch(getOfficeFailure(error.response.data));
    }
};
