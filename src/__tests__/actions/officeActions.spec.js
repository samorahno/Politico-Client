/* eslint-disable no-undef */
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from '../../config/axiosConfig';
import { CREATE_OFFICE_SUCCESS, CREATE_OFFICE_FAILURE, GET_OFFICE_SUCCESS, GET_OFFICE_FAILURE } from '../../action-types';
import { createOfficeSuccess, createOfficeFailure, getOfficeSuccess, getOfficeFailure, createOffice, getOffice } from '../../actions';


const officeData = {
    name: 'gjgjhgj',
    type: 'federal'
};

const officeReturnValue = {
    payload: {},
    message: {}
};

const middleware = [thunk];
const mockedStore = configureMockStore(middleware);

describe('Auth actions', () => {
    it('should return correct action for createOfficeSuccess ', () => {
        const action = createOfficeSuccess();
        expect(action).toEqual({
            type: CREATE_OFFICE_SUCCESS,
            payload: {},
            message: ""
        });
    });

    it('should return correct action for createOfficeFailure ', () => {
        const action = createOfficeFailure();
        expect(action).toEqual({
            type: CREATE_OFFICE_FAILURE
        });
    });

    it('should return correct dispatch after API call for create office', () => {
        const store = mockedStore({});
        axios.post = jest.fn().mockReturnValue(Promise.resolve({
            data: { data: [officeReturnValue] }
        }));
        const expected = {
            type: CREATE_OFFICE_SUCCESS,
            payload: officeReturnValue
        };

        return store.dispatch(createOffice(officeData))
            .then(() => {
                expect(store.getActions()[0].type).toEqual(expected.type);
            });
    });

    it('should return correct action for getOfficeSuccess ', () => {
        const action = getOfficeSuccess();
        expect(action).toEqual({
            type: GET_OFFICE_SUCCESS,
            payload: {},
            message: ""
        });
    });

    it('should return correct action for getOfficeFailure ', () => {
        const action = getOfficeFailure(officeData);
        expect(action).toEqual({
            type: GET_OFFICE_FAILURE,
            payload: officeData
        });
    });

    it('should return correct dispatch after API call for get office', () => {
        const store = mockedStore({});
        axios.get = jest.fn().mockReturnValue(Promise.resolve({
            data: { data: [officeReturnValue] }
        }));
        const expected = {
            type: GET_OFFICE_SUCCESS,
            payload: officeReturnValue,
            message: ''
        };

        return store.dispatch(getOffice())
            .then(() => {
                expect(store.getActions()[0].type).toEqual(expected.type);
            });
    });
});
