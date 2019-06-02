import React from 'react';
import { shallow } from 'enzyme';
import { Sidebar } from '../../components/nav/DashboardSidebar';

const props = {
    logout: jest.fn(),
    history: {
        push: jest.fn()
    },
    logoutSuccess: jest.fn()
};

describe('Dashboard Sidebar', () => {
    it('should render dashboard sidebar component correctly', () => {
        const component = shallow(<Sidebar {...props} />);
        const logoutSuccess = jest.fn();
        expect(logoutSuccess.mock.calls.length).toBe(0);
        expect(component).toMatchSnapshot();
    });
});
