import githubToken from "../config"

interface User {
    id: number
    name: string
    login: string
    avatar_url: string
    bio: string
    followers: number
    following: number
    location: string
    repos_url: string
}

const getUser = async (username: string): Promise<User | undefined > => {
      const res = await fetch(`https://api.github.com/users/${username}`, {
        headers: { 
          Authorization: `token ${githubToken}`,
        },
      })

      if (!res.ok) {
        throw new Error(`Failed to fetch user ${username}: ${res.status}`);
      }

      const data = await res.json()

      const user = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar_url: data.avatar_url,
        bio: data.bio,
        followers: data.followers,
        following: data.following,
        location: data.location,
        repos_url: data.repos_url,
      }

      return user
}

export default getUser
