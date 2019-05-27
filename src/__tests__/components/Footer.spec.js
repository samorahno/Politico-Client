import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/nav/Footer';

describe('Footer', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Footer debug/>);
        expect(component).toMatchSnapshot();
    });
});
