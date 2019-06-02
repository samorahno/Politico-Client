import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../../components/landing/landing';

describe('Landing Page Component', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Landing />);
        expect(component).toMatchSnapshot();
    });
});

