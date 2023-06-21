import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export async function getGithubUserData() {
  // Get user data
  const { data: userData } = await octokit.request("GET /users/:username", {
    username: "yaffalhakim1",
  });

  // Get user's public repositories
  const { data: reposData } = await octokit.request(
    "GET /users/:username/repos",
    {
      username: "yaffalhakim1",
      per_page: 100, // limit to 100 results per page
    }
  );

  // Get user's starred repositories
  const { data: starredData } = await octokit.request(
    "GET /users/:username/starred",
    {
      username: "yaffalhakim1",
      per_page: 100, // limit to 100 results per page
    }
  );

  // Extract relevant data from responses
  const userDataWithReposAndStars = {
    name: userData.name,
    login: userData.login,
    avatar_url: userData.avatar_url,
    public_repos: userData.public_repos,
    followers: userData.followers,
    following: userData.following,
    // pullRequestData: pullRequestData,
    repos: reposData.map(
      (repo: { name: any; description: any; html_url: any }) => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
      })
    ),
    starred: starredData.map(
      (repo: { name: any; description: any; html_url: any }) => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
      })
    ),
  };

  return userDataWithReposAndStars;
}

export async function getLeetcode() {
  const leet = await fetch(
    "https://leetcode-stats-api.herokuapp.com/yaffalhakim1"
  );

  if (!leet.ok) {
    throw new Error("Failed to fetch leetcode data");
  }

  return leet.json();
}
