import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { officeReducer } from './officeReducer';

const reducers = combineReducers({
    auth: authReducer,
    office: officeReducer
});

export {
    reducers,
    authReducer,
    officeReducer
};
