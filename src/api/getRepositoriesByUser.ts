import githubToken from "../config"
import { Repository } from "../interfaces";

const getRepositoriesByUser = async (username: string): Promise<Repository[] | undefined> => {
      // en lugar de fetch, podemos utilizar graphQL
      const res = await fetch(`https://api.github.com/users/${username}/repos`, {
        headers: { 
          Authorization: `token ${githubToken}`,
        },
      })

      if (!res.ok) {
        throw new Error(`Failed to fetch user repos for ${username}: ${res.status}`);
      }

      const data = await res.json()

      const repositories = data?.map((repository: Repository) => ({
        id: repository.id,
        name: repository.name,
        description: repository.description,
        language: repository.language,
        forksCount: repository.forks_count,
        stargazersCount: repository.stargazers_count,
        updatedAt: repository.updated_at,
        htmlUrl: repository.html_url,
        owner: {
          id: repository.owner.id,
          login: repository.owner.login,
        },
      }))

      return repositories
}

export default getRepositoriesByUser
