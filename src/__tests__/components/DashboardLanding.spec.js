import React from 'react';
import { shallow } from 'enzyme';
import DashboardLanding from '../../components/dashboard/DashboardLanding';

describe('Dashboard Landing Page', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<DashboardLanding />);
        expect(component).toMatchSnapshot();
    });
});
