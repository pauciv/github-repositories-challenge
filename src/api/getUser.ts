import githubToken from "../config"
import { User } from "../interfaces";

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
        avatarUrl: data.avatar_url,
        bio: data.bio,
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        location: data.location,
        reposUrl: data.repos_url,
      }

      return user
}

export default getUser
