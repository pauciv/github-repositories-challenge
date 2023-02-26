interface Repository {
    id: number
    name: string
    description: string
    language: string
    forksCount: number
    stargazersCount: number
    updatedAt: string
    htmlUrl: string
    owner: {
      id: number
      login: string
    }
}

export default Repository