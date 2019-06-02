import React from 'react';
import { shallow } from 'enzyme';
import PartiesCard from '../../components/common/partiesCard';

describe('Parties Card Component', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<PartiesCard />);
        expect(component).toMatchSnapshot();
    });
});
