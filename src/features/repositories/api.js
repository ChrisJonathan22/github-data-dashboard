// API request functionexport async function fetchRepositories(username, sort) {


export async function fetchRepositories (username, sort="updated", direction="desc", page = 1) {

const encodedUsername = encodeURIComponent(username);

console.log("Username encoded: ", encodedUsername);

const response = await fetch(
    `https://api.github.com/users/${encodedUsername}/repos?sort=${sort}&direction=${direction}&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const data = await response.json();

//   console.log("Data from api.js", data);
  

  return data;
}


