import React from 'react';
import { shallow } from 'enzyme';
import { OfficeAdmin } from '../../components/dashboard/Offices-Admin';

const props = {
    listOffices: jest.fn(),
    createOfficeError: '',
    status: 200,
    errorMessage: '',
    createNewOffice: jest.fn(),
    isAdmin: true,
    offices: [],
    previousProps: {
        createOfficeError: ''
    }
};

const propsError = {
    listOffices: jest.fn(),
    createOfficeError: 'nnn',
    status: 400,
    errorMessage: 'gg',
    createNewOffice: jest.fn(),
    previousProps: {
        createOfficeError: 'hshjshjs'
    }
};

const officeData = {
    name: 'office',
    type: 'federal'
};

describe('Header', () => {
    it('should render OfficeAdmin component correctly', () => {
        const component = shallow(<OfficeAdmin {...props}/>);
        expect(component).toMatchSnapshot();
    });

    it('should simulate onchange event for office name text box', () => {
        const component = shallow(<OfficeAdmin {...props}/>);
        component.find('input').at(0).simulate('change', {
            target: { value: officeData.name }
        });
    });

    it('should simulate onchange event for office type drop down menu', () => {
        const component = shallow(<OfficeAdmin {...props}/>);
        component.find('select').at(0).simulate('change', {
            target: { value: officeData.type }
        });
    });

    it('', () => {
        const component = shallow(<OfficeAdmin {...props}/>);
        component.find('form').simulate('submit', {
            preventDefault: () => {}
        });
        component.setState({
            name: officeData.name,
            type: officeData.type
        });
        expect(component).toMatchSnapshot();
    });

    it('should simulate onchange event for office type drop down menu', () => {
        const component = shallow(<OfficeAdmin {...propsError}/>);
        expect(component).toMatchSnapshot();
    });
});

