import React from 'react';
import { shallow } from 'enzyme';
import { PartiesAdmin } from '../../components/dashboard/Parties-Admin';

const props = {
    listParties: jest.fn(),
    createPartyError: 'ghgj',
    status: 200,
    errorMessage: 'jhj',
    parties: [],
    isAdmin: true,
    createNewParty: jest.fn()
};

const partyData = {
    name: 'Party',
    alias: 'ACP',
    hqAddress: '23, Ade',
    logoUrl: 'http://jhkjhkjd'
};

describe('Parties Component', () => {
    it('should render Part component correctly', () => {
        const component = shallow(<PartiesAdmin {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('should simulate change event on partyname textbox', () => {
        const component = shallow(<PartiesAdmin {...props} />);
        component.find('input').at(0).simulate('change', {
            target: { value: partyData.name }
        });
        expect(component).toMatchSnapshot();
    });

    it('should simulate change event on abbreviation textbox', () => {
        const component = shallow(<PartiesAdmin {...props} />);
        component.find('input').at(1).simulate('change', {
            target: { value: partyData.alias }
        });
        expect(component).toMatchSnapshot();
    });

    it('should simulate change event on address textbox', () => {
        const component = shallow(<PartiesAdmin {...props} />);
        component.find('input').at(2).simulate('change', {
            target: { value: partyData.hqAddress }
        });
        expect(component).toMatchSnapshot();
    });

    it('should simulate change event on image link textbox', () => {
        const component = shallow(<PartiesAdmin {...props} />);
        component.find('input').at(3).simulate('change', {
            target: { value: partyData.hqAddress }
        });
        expect(component).toMatchSnapshot();
    });

    it('should simulate form submission', () => {
        const component = shallow(<PartiesAdmin {...props} />);
        component.find('form').simulate('submit', {
            preventDefault: () => {}
        });
        component.setState({
            name: partyData.name,
            alias: partyData.alias,
            hqAddress: partyData.hqAddress,
            logoUrl: partyData.logoUrl
        });
        expect(component).toMatchSnapshot();
    });
});
