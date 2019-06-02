import React from 'react';
import { shallow } from 'enzyme';
import CandidateRequest from '../../components/dashboard/CandidateRequest';

describe('Candidate Request Page', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<CandidateRequest />);
        expect(component).toMatchSnapshot();
    });
});
