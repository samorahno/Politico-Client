import React from 'react';
import { shallow } from 'enzyme';
import { Signup } from '../../components/modal/signup';

const props = {
    history: {
        push: jest.fn()
    },
    signup: jest.fn(),
    isAuthenticated: {
        payload: {
            status: true
        }
    }
};

let signupData = {
    firstname: 'sola',
    lastname: 'bimbp',
    email: 'b@gmail.com',
    phone: '0803343333',
    password: 'jhjhjkhkj',
    confirmPassword: 'jhjhjkhkj'
};

describe('Signup Component', () => {
    it('should render Signup component correctly', () => {
        const component = shallow(<Signup {...props}/>);
        expect(component).toMatchSnapshot();
    });

    it('should return onchange for firstname', () => {
        const component = shallow(<Signup {...props}/>);
        component.find('input').at(0).simulate('change', {
            target: { value: signupData.firstname }
        });

        component.find('input').at(0).simulate('focus');
        expect(component).toMatchSnapshot();
    });

    it('should return onchange for lastname', () => {
        const component = shallow(<Signup {...props}/>);
        component.find('input').at(1).simulate('change', {
            target: { value: signupData.lastname }
        });

        component.find('input').at(1).simulate('focus');
        expect(component).toMatchSnapshot();
    });

    it('', () => {
        const component = shallow(<Signup {...props}/>);
        component.find('form').simulate('submit', {
            preventDefault: () => {}
        });
        component.setState({
            firstname: signupData.firstName,
            lastname: signupData.lastName,
            email: signupData.email,
            phone: signupData.phoneNumber,
            password: signupData.password,
            confirmPassword: signupData.password_confirm
        });
        expect(component).toMatchSnapshot();
    });
});
