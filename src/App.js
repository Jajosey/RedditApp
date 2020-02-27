import React, { useEffect, useState } from "react";
import Reddit from "./components/Reddit/Reddit";
import {
  removePostArray,
  removeDataArray,
  parseDataArray,
  sortDataArray
} from "./transformations/transformations";
import styled from "styled-components";

const ContainerDiv = styled.div``;

const App = () => {
  const [resource, setResource] = useState([]);
  useEffect(() => {
    let uri = "https://www.reddit.com/r/ProgrammerHumor.json?limit=20";

    fetch(uri)
      .then(response => {
        return response.json();
      })
      .then(response => {

        //sometimes I think this is more legible than chainging 
        //together a long string of parameterless calls
        const postArray = removePostArray(response);
        const postDataArray = removeDataArray(postArray);
        const parsedDataArray = parseDataArray(postDataArray);
        const sortedDataArray = sortDataArray(parsedDataArray);

        setResource(sortedDataArray);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <ContainerDiv>
      <div>
        <Reddit redditData={resource} />
      </div>
    </ContainerDiv>
  );
};

export default App;
