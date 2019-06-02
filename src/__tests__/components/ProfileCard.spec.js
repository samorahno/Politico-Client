import React from 'react';
import { shallow } from 'enzyme';
import ProfileCard from '../../components/common/profileCard';

describe('Profile Card Component', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<ProfileCard />);
        expect(component).toMatchSnapshot();
    });
});
