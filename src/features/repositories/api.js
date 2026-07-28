// API request functionexport async function fetchRepositories(username, sort) {


export async function fetchRepositories (username, sort="updated", page = 1, direction="desc") {
    const encodedUsername = encodeURIComponent(username);

    // Get repos
    const response = await fetch(
        `https://api.github.com/users/${encodedUsername}/repos?sort=${sort}&direction=${direction}&page=${page}&per_page=5`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch repositories");
    }

    const data = await response.json();

    // Get next link
    const linkHeader = response.headers.get("Link");

    console.log("Link header: ", linkHeader);

    // Get total repos count

    const totalRepoResponse = await fetch(
        `https://api.github.com/users/${encodedUsername}`
    );

    if (!totalRepoResponse.ok) {
        throw new Error("Failed to fetch total repositories");
    }

    const totalRepo = await totalRepoResponse.json().public_repos;
    
    console.log("Total repos from api.js: ", totalRepo);
    

    return {
        data,
        hasNextPage: linkHeader?.includes('rel="next"') ?? false,
        totalRepo: totalRepo
    };
}


