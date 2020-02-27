import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Vote from './Vote';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('<Vote/>', () =>{
    it('takes a type and text and renders the vote div', () =>{
        const vote = shallow(<Vote type='500' text='Up Votes:' />).dive();
        expect(vote.find('div').text()).toEqual('Up Votes: 500')
    })
})