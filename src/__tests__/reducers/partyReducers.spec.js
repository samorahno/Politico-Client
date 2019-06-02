import { partyReducer } from '../../reducers/partyReducer';
import { CREATE_PARTY_SUCCESS,
    CREATE_PARTY_FAILURE,
    GET_PARTY_SUCCESS,
    GET_PARTY_FAILURE
} from '../../action-types';


describe('Auth reducer', () => {
    it('should return initial state', () => {
        expect(partyReducer(undefined, { type: '@@INIT' })).toEqual(
            {}
        );
    });

    it('should return CREATE_PARTY_SUCCESS state', () => {
        expect(partyReducer({
            party: [{}]
        }, {
            type: CREATE_PARTY_SUCCESS,
            message: 'Party',
            payload: [{}]
        })).toEqual({
            message: 'Party',
            createPartyError: false,
            party: [{}, [{}]]
        });
    });

    it('should return CREATE_PARTY_FAILURE state', () => {
        expect(partyReducer(undefined, {
            type: CREATE_PARTY_FAILURE,
            message: 'Party',
            payload: {}
        })).toEqual({
            message: 'Party',
            createPartyError: true
        });
    });

    it('should return GET_PARTY_SUCCESS state', () => {
        expect(partyReducer(undefined, {
            type: GET_PARTY_SUCCESS,
            party: []
        })).toEqual({
            party: undefined
        });
    });

    it('should return GET_PARTY_FAILURE state', () => {
        expect(partyReducer(undefined, {
            type: GET_PARTY_FAILURE,
            party: []
        })).toEqual({
            party: undefined
        });
    });
});
