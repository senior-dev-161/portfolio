import { GithubRepo } from "./types"

const GitHubAccessToken = process.env.GITHUB_ACCESS_TOKEN

const tempData = {
  "login": "NumanIbnMazid",
  "id": 38869177,
  "created_at": "2018-04-30T21:30:32Z",
  "updated_at": "2023-06-24T11:38:55Z"
}

// its for /api/stats/github
export async function fetchGithub() {
  const fake = false
  if (fake) return tempData

  return fetch(
    "https://api.github.com/users/NumanIbnMazid",
    {
      headers: {
        Authorization: `Bearer ${GitHubAccessToken}`,
      },
    }
  ).then((res) => res.json())
}

// its for getting temporary old data
export function getOldStats() {
  return tempData
}

/* Retrieves the number of stars and forks for the user's repositories on GitHub. */
export async function getGithubStarsAndForks() {
  // Fetch user's repositories from the GitHub API
  const res = await fetch(
    "https://api.github.com/users/ChangeYourself0613/repos?per_page=100",
    // {
    //   headers: {
    //     Authorization: `Bearer ${GitHubAccessToken}`,
    //   },
    // }
  )
  const userRepos = await res.json()

  /* Default Static Data: If use exceeded the rate limit of api */
  if (
    (userRepos.documentation_url ===
      "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting")
  ) {
    return {
      githubStars: 7,
      forks: 4,
    }
  }
  // filter those repos that are forked
  const mineRepos: GithubRepo[] = userRepos?.filter(
    (repo: GithubRepo) => !repo.fork
  )

  // Calculate the total number of stars for the user's repositories
  const githubStars = mineRepos.reduce(
    (accumulator: number, repository: GithubRepo) => {
      return accumulator + repository["stargazers_count"]
    },
    0
  )

  // Calculate the total number of forks for the user's repositories
  const forks = mineRepos.reduce(
    (accumulator: number, repository: GithubRepo) => {
      return accumulator + repository["forks_count"]
    },
    0
  )

  return { githubStars, forks }
}
