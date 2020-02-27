export const removePostArray = response => {
  return response.data.children;
};

//for each object in the array, only get the data field
export const removeDataArray = postArray => {
  const dataArray = postArray.map(post => {
    return post.data;
  });
  return dataArray;
};

export const parseDataArray = postDataArray => {
  const parsedData = postDataArray.map(post => ({
    author: post.author,
    title: post.title,
    num_comments: post.num_comments,
    permalink: post.permalink,
    ups: post.ups,
    downs: post.downs,
    score: post.score
  }));
  return parsedData;
};

// sort the array in descending order based on comments
export const sortDataArray = arrayToSort => {
  return arrayToSort.sort(
    (userA, userB) => userB.num_comments - userA.num_comments
  );
};
