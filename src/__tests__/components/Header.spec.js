import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/nav/Footer';

describe('Header', () => {
    it('should render header component correctly', () => {
        const component = shallow(<Header />);
        expect(component).toMatchSnapshot();
    });
});
