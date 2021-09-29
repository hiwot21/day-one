export const requestByTitle = async (movieName) => {
  const res = await fetch(
    `http://www.omdbapi.com/?t=${movieName}&apikey=${process.env.REACT_APP_KEY}`
  );

  const data = await res.json();
  console.log(data);
  return data;
};

export const requestByID = async (id, cb) => {
  const res = await fetch(
    `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_KEY}`
  );
  const data = await res.json();
  console.log(data);
};
