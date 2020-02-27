import React from "react";
import styled from "styled-components";
import Votes from "../Votes/Votes";

const RedditDiv = styled.div`
  margin: 5px;
  padding: 10px;
  font-family: arial, sans-serif;
  font-size: 15px;
  font-weight: bold;
  border: 1px solid blue;
  text-align: center;
  box-shadow: 10px 10px 5px grey;
  &:hover {
    background-color: #00ffff;
  }
`;

const WrapperDiv = styled.div`
  display: grid;
  margin: 10px;

  grid-template-columns: 25% 25% 25% 25%;

  @media (max-width: 800px) {
    flex-direction: column;
    grid-template-columns: 50% 50%;
  }
`;

const AuthorDiv = styled.div`
  font-size: 10px;
  color: gray;
`;

const CommentsDiv = styled.div`
  background: ${object => (object.score % 2 === 0 ? "orange" : "blue")};
`;
const dataToLinkComponent = (permalink, title) => {
  const url = `https://www.reddit.com/${permalink}`;
  return <a href={url}>{title}</a>;
};

const Reddit = props => {
  const resource = props.redditData;
  return (
    <WrapperDiv>
      {resource.map((object, index) => (
        <RedditDiv key={index}>
          <div>
            {dataToLinkComponent(object.permalink, object.title)}
            <AuthorDiv>By: {object.author}</AuthorDiv>
            <CommentsDiv {...object}>
              {object.num_comments} Comments
            </CommentsDiv>
            <Votes ups={object.ups} downs={object.downs} />
          </div>
        </RedditDiv>
      ))}
    </WrapperDiv>
  );
};

export default Reddit;
