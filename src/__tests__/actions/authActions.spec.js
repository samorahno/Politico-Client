/* eslint-disable no-undef */
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from '../../config/axiosConfig';
import { AUTH_LOGIN, AUTH_SIGNUP, AUTH_FAILURE, AUTH_LOGOUT } from '../../action-types';
import { loginSucess,
    authFailure,
    loginUser,
    signupUser,
    logoutUser
} from '../../actions';


const userData = {
    firstname: 'Damilola',
    lastname: 'Famoofo',
    othername: '',
    email: 'damilolaesther786@gmail.com',
    phone: '07036361122'
};

const loginReturnValue = {
    user: {},
    message: {},
    token: 'jhjkhjkhkjh'
};

const signupReturnValue = {
    user: {},
    message: {}
};

const loginObject = {
    email: 'damilolaesther786@gmail.com',
    password: 'damilola'
};

const loginObjectSec = {
    email: 'hggfhgfg@jhh.com',
    password: 'sdfsfdf'
};

const userDataSec = {
    firstname: '',
    lastname: '',
    othername: '',
    email: 'damilolaesther786@gmail.com',
    phone: '07036361122'
};

const middleware = [thunk];
const mockedStore = configureMockStore(middleware);

describe('Auth actions', () => {
    it('should return correct action for loadingStateHandler ', () => {
        const action = loginSucess();
        expect(action).toEqual({
            type: AUTH_LOGIN,
            payload: {
                user: undefined,
                message: undefined,
                token: undefined
            }
        });
    });

    it('should return correct action for loadingStateHandler ', () => {
        const action = authFailure();
        expect(action).toEqual({
            type: AUTH_FAILURE,
            payload: undefined
        });
    });

    it('should return correct dispatch after API call for sign in', () => {
        const store = mockedStore({});
        axios.post = jest.fn().mockReturnValue(Promise.resolve({
            data: { data: [loginReturnValue] }
        }));
        const expected = {
            type: AUTH_LOGIN,
            payload: loginReturnValue
        };

        return store.dispatch(loginUser(loginObject))
            .then(() => {
                expect(store.getActions()[0].type).toEqual(expected.type);
            });
    });

    it('should return correct dispatch after API call for signin', () => {
        const store = mockedStore({});
        axios.post = jest.fn().mockReturnValue(Promise.reject({
            response: {
                data: ''
            }
        }));
        const expected = {
            type: AUTH_FAILURE,
            payload: loginReturnValue
        };

        return store.dispatch(loginUser(loginObjectSec))
            .then(() => {
                expect(store.getActions()[0].type).toEqual(expected.type);
            });
    });

    it('should return correct dispatch after API call for signup', () => {
        const store = mockedStore({});
        axios.post = jest.fn().mockReturnValue(Promise.resolve({
            data: { data: [signupReturnValue] }
        }));
        const expected = {
            type: AUTH_SIGNUP,
            payload: signupReturnValue
        };

        return store.dispatch(signupUser(userData))
            .then(() => {
                expect(store.getActions()[0].type).toEqual(expected.type);
            });
    });

    it('should return error dispatch after API call for signup', () => {
        const store = mockedStore({});
        axios.post = jest.fn().mockReturnValue(Promise.reject({
            response: {
                data: ''
            }
        }));
        const expected = {
            type: AUTH_FAILURE,
            payload: signupReturnValue
        };

        return store.dispatch(signupUser(userDataSec))
            .then(() => {
                expect(store.getActions()[0].type).toEqual(expected.type);
            });
    });

    it('should return success dispatch after call for logout', () => {
        const store = mockedStore({});

        const expected = {
            type: AUTH_LOGOUT
        };

        return store.dispatch(logoutUser())
            .then(() => {
                expect(store.getActions()[0].type).toEqual(expected.type);
            });
    });
});
