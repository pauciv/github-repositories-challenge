interface Repository {
  id: number
  name: string
  description: string
  language: string
  forks_count: number
  stargazers_count: number
  updated_at: string
  html_url: string
  owner: {
    id: number
    login: string
  }
}

export default Repository