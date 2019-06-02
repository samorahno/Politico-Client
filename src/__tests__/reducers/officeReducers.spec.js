import { officeReducer } from '../../reducers/officeReducer';
import { CREATE_OFFICE_SUCCESS,
    CREATE_OFFICE_FAILURE,
    GET_OFFICE_SUCCESS,
    GET_OFFICE_FAILURE
} from '../../action-types';


describe('Office reducer', () => {
    it('should return initial state', () => {
        expect(officeReducer(undefined, { type: '@@INIT' })).toEqual(
            {}
        );
    });

    it('should return CREATE_OFFICE_SUCCESS state', () => {
        expect(officeReducer({
            office: []
        }, {
            type: CREATE_OFFICE_SUCCESS,
            message: 'Office',
            payload: [{}]
        })).toEqual({
            message: 'Office',
            createOfficeError: false,
            office: [{}]
        });
    });

    it('should return CREATE_OFFICE_FAILURE state', () => {
        expect(officeReducer(undefined, {
            type: CREATE_OFFICE_FAILURE,
            message: 'Office',
            payload: {}
        })).toEqual({
            message: 'Office',
            createOfficeError: true
        });
    });

    it('should return GET_OFFICE_SUCCESS state', () => {
        expect(officeReducer(undefined, {
            type: GET_OFFICE_SUCCESS,
            office: []
        })).toEqual({
            office: undefined
        });
    });

    it('should return GET_OFFICE_FAILURE state', () => {
        expect(officeReducer(undefined, {
            type: GET_OFFICE_FAILURE,
            office: []
        })).toEqual({
            office: undefined
        });
    });
});
