import { authReducer } from '../../reducers/authReducer';
import { AUTH_LOGIN, AUTH_SIGNUP, AUTH_FAILURE } from '../../action-types';

const userObject = {
    email: 'samabos007@gmail.com',
    password: '1234567'
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

it('should return LOGIN_USER_BEGIN state for loading state', () => {
    expect(authReducer(userObject, {
        type: AUTH_LOGIN
    })).toEqual({
        isAuthenticated: true,
        message: undefined,
        email: 'samabos007@gmail.com',
        password: '1234567'
    });
});

it('should return LOGIN_USER_BEGIN state for loading state', () => {
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


