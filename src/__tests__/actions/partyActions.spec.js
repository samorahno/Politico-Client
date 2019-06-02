/* eslint-disable no-undef */
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from '../../config/axiosConfig';
import { CREATE_PARTY_SUCCESS, CREATE_PARTY_FAILURE, GET_PARTY_SUCCESS, GET_PARTY_FAILURE } from '../../action-types';
import { createPartySuccess, createPartyFailure, getPartySuccess, getPartyFailure, createParty, getParty } from '../../actions';


const partyData = {
    name: 'gjgjhgj',
    type: 'federal'
};

const partyReturnValue = {
    payload: {},
    message: {}
};

const middleware = [thunk];
const mockedStore = configureMockStore(middleware);

describe('Auth actions', () => {
    it('should return correct action for createPartySuccess ', () => {
        const action = createPartySuccess();
        expect(action).toEqual({
            type: CREATE_PARTY_SUCCESS,
            payload: {},
            message: ""
        });
    });

    it('should return correct action for createPartyFailure ', () => {
        const action = createPartyFailure();
        expect(action).toEqual({
            type: CREATE_PARTY_FAILURE
        });
    });

    it('should return correct dispatch after API call for create party', () => {
        const store = mockedStore({});
        axios.post = jest.fn().mockReturnValue(Promise.resolve({
            data: { data: [partyReturnValue] }
        }));
        const expected = {
            type: CREATE_PARTY_SUCCESS,
            payload: partyReturnValue
        };

        return store.dispatch(createParty(partyData))
            .then(() => {
                expect(store.getActions()[0].type).toEqual(expected.type);
            });
    });

    it('should return correct action for getPartySuccess ', () => {
        const action = getPartySuccess();
        expect(action).toEqual({
            type: GET_PARTY_SUCCESS,
            payload: {},
            message: ""
        });
    });

    it('should return correct action for getPartyFailure ', () => {
        const action = getPartyFailure(partyData);
        expect(action).toEqual({
            type: GET_PARTY_FAILURE,
            payload: partyData
        });
    });

    it('should return correct dispatch after API call for get Party', () => {
        const store = mockedStore({});
        axios.post = jest.fn().mockReturnValue(Promise.resolve({
            data: { data: [partyReturnValue] }
        }));
        const expected = {
            type: GET_PARTY_SUCCESS,
            payload: partyReturnValue,
            message: ''
        };

        return store.dispatch(getParty())
            .then(() => {
                expect(store.getActions()[0].type).toEqual(expected.type);
            });
    });
});
