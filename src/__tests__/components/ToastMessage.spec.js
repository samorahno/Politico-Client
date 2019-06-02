import React from 'react';
import { shallow } from 'enzyme';
import ToastMessage from '../../components/common/ToastMessage';

describe('Toast Message Component', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<ToastMessage />);
        expect(component).toMatchSnapshot();
    });
});
