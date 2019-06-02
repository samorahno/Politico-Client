import React from 'react';
import { shallow } from 'enzyme';
import DashboardStat from '../../components/common/dashboardstat';

describe('Dashboard Status Component', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<DashboardStat />);
        expect(component).toMatchSnapshot();
    });
});
