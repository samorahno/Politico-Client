import React from 'react';
import { shallow } from 'enzyme';
import ListOffices from '../../components/common/ListOffices';

describe('List Offices Component', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<ListOffices />);
        expect(component).toMatchSnapshot();
    });
});
