import githubToken from "../config"

interface Repository {
  id: number
  name: string
  description: string
  language: string
  forks_count: number
  stargazers_count: number
  updated_at: string
  license: {
    key: string
    name: string
  }
  owner: {
    id: number
    login: string
  }
}

const getRepositoriesByUser = async (username: string): Promise<Repository[] | undefined> => {
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
        // license: {
        //   key: repository.license.key,
        //   name: repository.license.name,
        // },
        owner: {
          id: repository.owner.id,
          login: repository.owner.login,
        },
      }))

      return repositories
}

export default getRepositoriesByUser
