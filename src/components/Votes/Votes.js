import React from "react";
import Vote from "../Vote/Vote";

const Votes = props => {
  const { ups, downs } = props;
  return (
    <div>
      <Vote type={ups} text="Up Votes:" />
      <Vote type={downs} text="Down Votes:" />
    </div>
  );
};

export default Votes;
