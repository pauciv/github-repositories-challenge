import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { getRepositoriesByUser } from "../api"
import RepositoryCard from "./RepositoryCard"
import SearchRepository from "./SearchRepository"

type UserRepositoriesProps = {
  username: string
}

const UserRepositories = ({ username }: UserRepositoriesProps) => {
  const {
    data: repositories,
    status,
    error,
  } = useQuery({
    queryKey: ['repositories', username],
    queryFn: () => getRepositoriesByUser(username),
    enabled: !!username,
  })

  const orderedRepositories = repositories?.sort((a, b) => {
    const dateA = new Date(a.updated_at)
    const dateB = new Date(b.updated_at)

    // Compare the dates and return either -1 (a should come first) or 1 (b should come first) to determine the sort order
    if (dateA > dateB) {
      return -1
    } else if (dateB > dateA) {
      return 1
    }
    return 0
  })

  const [filteredRepositories, setFilteredRepositories] = useState(orderedRepositories)

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'error') {
    return <p>{JSON.stringify(error)}</p>
  }

  return (
    <>
      <SearchRepository repositories={repositories} setFilteredRepositories={setFilteredRepositories} />

      <div className="flex flex-wrap mb-10">
        {filteredRepositories?.map(repository => (
          <div key={repository?.id} className="w-full lg:w-1/2">
            <div className="p-2 w-full h-full">
              <RepositoryCard {...repository} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default UserRepositories
