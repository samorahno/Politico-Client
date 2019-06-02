import React from 'react';
import { shallow } from 'enzyme';
import Route from '../../routes';

describe('Route Component', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Route />);
        expect(component).toMatchSnapshot();
    });
});
