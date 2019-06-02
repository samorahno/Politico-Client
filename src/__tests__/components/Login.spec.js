import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapStateToProps } from '../../components/modal/login';


const props = {
    history: {
        push: jest.fn()
    },
    clearError: jest.fn(),
    login: jest.fn(),
    userData: {
        isAuthenticated: true
    }
};

let component;

const loginData = {
    email: 'damil@gmail.com',
    password: 'hghgjsg'
};

describe('Header', () => {
    beforeAll(() => {
        component = shallow(<Login {...props} />);
    });

    it('should render correctly in "debug" mode', () => {
        expect(component).toMatchSnapshot();
    });

    it('should return onchange for email', () => {
        component.find('input').at(0).simulate('change', {
            target: { value: loginData.email }
        });

        component.find('input').at(0).simulate('focus');
        expect(component).toMatchSnapshot();
    });

    it('should return onchange for password', () => {
        component.find('input').at(1).simulate('change', {
            target: { value: loginData.password }
        });
        component.find('input').at(1).simulate('focus');

        expect(component).toMatchSnapshot();
    });
    it('', () => {
        const userData = {
            authError: true,
            message: {
                message: 'error'
            }
        };
        component = shallow(<Login login={props.login} userData={userData} />);

        component.find('form').simulate('submit', {
            preventDefault: () => {}
        });
        component.setState({
            email: loginData.email,
            password: loginData.password
        });
        expect(component).toMatchSnapshot();
    });
    it('', () => {
        const action = {
            auth: {}
        };
        const state = mapStateToProps(action);
        expect(state).toEqual({
            userData: action.auth
        });
    });
});
