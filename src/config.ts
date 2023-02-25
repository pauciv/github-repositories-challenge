const githubToken = import.meta.env.VITE_API_GITHUB_TOKEN

if (!githubToken) {
  throw new Error('GitHub token not found in .env file')
}

export default githubToken
