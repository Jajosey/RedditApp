import React from "react";
import styled from "styled-components";

const VoteDiv = styled.div`
  display: inline-block;
  margin-ri8ght: 10px;
`;
const Vote = props => {
  const { type, text } = props;
  return (
    <VoteDiv {...props}>
      {text} {type}
    </VoteDiv>
  );
};

export default Vote;
