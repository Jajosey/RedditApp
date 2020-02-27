import React from "react";
import { removePostArray, removeDataArray } from "./transformations";

const MOCK_RESPONSE = {
  kind: "Listing",
  data: {
    modash: "",
    dist: 20,
    children: [
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
  }
};

const MOCK_POST_ARRAY = [
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
];

const MOCK_DATA_ARRAY = [
  {
    author: "TestAuthor111",
    title: "An Interesting Title",
    num_comments: 54,
    permalink: "/r/ProgrammerHumor/comments/fa7b7f/an_interesting_title/",
    ups: 231,
    downs: 0,
    score: 231
  },
  {
    author: "TestAuthor222",
    title: "Another Interesting Title",
    num_comments: 22,
    permalink: "/r/ProgrammerHumor/comments/uu2u2u/another_interesting_title/",
    ups: 222,
    downs: 0,
    score: 222
  }
];

test("Given the reddit API response, remove the children/data array", () => {
  TestRemovePostArray(MOCK_RESPONSE, MOCK_POST_ARRAY);
});

test("Given the post array, remove the data", () => {
  TestRemoveDataArray(MOCK_POST_ARRAY, MOCK_DATA_ARRAY);
});

function TestRemovePostArray(response, postArray) {
  const result = removePostArray(response);
  expect(result).toEqual(postArray);
}

function TestRemoveDataArray(postArray, dataArray){
    const result = removeDataArray(postArray);
    expect(result).toEqual(dataArray)
}