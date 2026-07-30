// Function to request repos and repos count
export async function fetchRepositories (username, sort="updated", page = 1, direction="desc") {
    // Remove spaces from the string
    const trimmedUsername = username.replaceAll(" ", "");

    // Encode the string
    const encodedUsername = encodeURIComponent(trimmedUsername);

    // Get repos
    const response = await fetch(
        `https://api.github.com/users/${encodedUsername}/repos?sort=${sort}&direction=${direction}&page=${page}&per_page=5`
    );

    // Check for errors
    if (!response.ok) {
        throw new Error("Failed to fetch repositories");
    }

    // Get response data in json
    const data = await response.json();

    // Get next link
    const linkHeader = response.headers.get("Link");

    // Get total repos count
    const totalRepoResponse = await fetch(
        `https://api.github.com/users/${encodedUsername}`
    );

    // Check for errors
    if (!totalRepoResponse.ok) {
        throw new Error("Failed to fetch total repositories");
    }

    // Get response data in json
    const totalRepo = await totalRepoResponse.json();
    
    return {
        data,
        hasNextPage: linkHeader?.includes('rel="next"') ?? false,
        totalRepo: totalRepo.public_repos
    };
}