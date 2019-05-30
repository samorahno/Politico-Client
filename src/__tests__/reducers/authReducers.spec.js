import { authReducer } from '../../reducers/authReducer';
import { AUTH_LOGIN, AUTH_SIGNUP, AUTH_FAILURE, CLEAR_AUTH_ERROR } from '../../action-types';

const userObject = {
    email: 'samabos007@gmail.com',
    password: '1234567'
};

const payload = {
    user: userObject,
    message: 'good',
    token: 'undefined'
};

const userObject2 = {
    email: 'samabos007@gmail.com',
    password: ''
};

const userRegData = {
    firstname: 'shina',
    lastname: 'bimbo',
    othername: '',
    email: 's.abo@gmail.com',
    phone: '08023553773',
    password: '12344567',
    confirmPassword: '12344567'
};

const userRegData2 = {
    firstname: 'shina',
    lastname: 'bimbo',
    othername: '',
    email: '',
    phone: '08023553773',
    password: '12344567',
    confirmPassword: '12344567'
};

describe('Auth reducer', () => {
    it('should return initial state', () => {
        expect(authReducer(undefined, { type: '@@INIT' })).toEqual(
            {}
        );
    });
});

it('should return AUTH_LOGIN state', () => {
    expect(authReducer(undefined, {
        type: AUTH_LOGIN,
        payload
    })).toEqual({
        isAuthenticated: true,
        authError: false,
        message: 'good',
        token: 'undefined',
        user: {
            email: "samabos007@gmail.com",
            password: "1234567"
        }
    });
});

it('should return AUTH_SIGNUP state for registering new user', () => {
    expect(authReducer(userRegData, {
        type: AUTH_SIGNUP
    })).toEqual({
        isAuthenticated: true,
        message: undefined,
        firstname: 'shina',
        lastname: 'bimbo',
        othername: '',
        email: 's.abo@gmail.com',
        phone: '08023553773',
        password: '12344567',
        confirmPassword: '12344567'
    });
});

it('should return AUTH_FAILURE state for login state', () => {
    expect(authReducer(userObject2, {
        type: AUTH_FAILURE
    })).toEqual({
        isAuthenticated: false,
        authError: true,
        message: undefined,
        email: 'samabos007@gmail.com',
        password: ''
    });
});

it('should return AUTH_FAILURE state for signup state', () => {
    expect(authReducer(userRegData2, {
        type: AUTH_FAILURE
    })).toEqual({
        isAuthenticated: false,
        authError: true,
        message: undefined,
        firstname: 'shina',
        lastname: 'bimbo',
        othername: '',
        email: '',
        phone: '08023553773',
        password: '12344567',
        confirmPassword: '12344567'
    });
});

it('should return CLEAR_AUTH_ERROR state', () => {
    expect(authReducer(undefined, {
        type: CLEAR_AUTH_ERROR,
        payload
    })).toEqual({
        authError: false
    });
});

