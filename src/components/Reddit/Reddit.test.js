import React from 'react';
import renderer from 'react-test-renderer'
import Reddit from './Reddit'

const MOCK_RESPONSE = [
    
        {
          kind: "t3",
          data: {
            author: "TestAuthor111",
            title: "An Interesting Title",
            num_comments: 54,
            permalink: "/r/ProgrammerHumor/comments/fa7b7f/an_interesting_title/",
            ups: 231,
            downs: 0,
            score: 231
          }
        },
        {
          kind: "t3",
          data: {
            author: "TestAuthor222",
            title: "Another Interesting Title",
            num_comments: 22,
            permalink:
              "/r/ProgrammerHumor/comments/uu2u2u/another_interesting_title/",
            ups: 222,
            downs: 0,
            score: 222
          }
        }
      ]
  

describe('<Reddit/>', () => {
    it('matches the snapshot', () =>{
        const tree = renderer.create(<Reddit redditData={MOCK_RESPONSE}/>).toJSON()
        expect(tree).toMatchSnapshot();
    })
})