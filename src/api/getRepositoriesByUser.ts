import githubToken from "../config"
import { Repository } from "../interfaces";

const getRepositoriesByUser = async (username: string): Promise<Repository[]> => {
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
        forks_count: repository.forks_count,
        stargazers_count: repository.stargazers_count,
        updated_at: repository.updated_at,
        html_url: repository.html_url,
        owner: {
          id: repository.owner.id,
          login: repository.owner.login,
        },
      }))

      return repositories
}

export default getRepositoriesByUser
