import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { officeReducer } from './officeReducer';
import { partyReducer } from './partyReducer';

const reducers = combineReducers({
    auth: authReducer,
    office: officeReducer,
    party: partyReducer
});

export {
    reducers,
    authReducer,
    officeReducer,
    partyReducer
};
