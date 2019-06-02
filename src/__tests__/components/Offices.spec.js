import React from 'react';
import { shallow } from 'enzyme';
import Offices from '../../components/dashboard/Offices';

describe('List offices Page', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Offices />);
        expect(component).toMatchSnapshot();
    });
});
