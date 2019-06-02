import React from 'react';
import { shallow } from 'enzyme';

import { AuthorizationHOC } from '../../components/AuthorizationHoc';

const auth = {
    token: 'fyjfjyhfhjfjhfjy',
    user: {
        isAdmin: true
    }
};

describe('<AuthorizationHOC />', () => {
    let wrapper;

    it('should be a route component', () => {
        wrapper = shallow(<AuthorizationHOC auth={auth} component={() => <div>Hello </div>} />);
        expect(wrapper).toMatchSnapshot();
    });
});
