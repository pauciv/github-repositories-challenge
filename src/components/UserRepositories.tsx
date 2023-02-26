import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { getRepositoriesByUser } from "../api"
import { Repository } from "../api/getRepositoriesByUser"
import SearchRepository from "./SearchRepository"

type UserRepositoriesProps = {
  username: string
}

const UserRepositories = ({ username }: UserRepositoriesProps) => {
  const {
    data: repositories,
    status,
    error,
    // fetchStatus,
  } = useQuery({
    queryKey: ['repositories', username],
    queryFn: () => getRepositoriesByUser(username),
    enabled: !!username,
  })

  const [filteredRepositories, setFilteredRepositories] = useState<Repository[]>(repositories);

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'error') {
    return <p>{JSON.stringify(error)}</p>
  }

  return (
    <>
        <SearchRepository repositories={repositories} setFilteredRepositories={setFilteredRepositories} />
        {repositories && (
          <>
            <ol>
              {filteredRepositories?.map(repository => (
                <li key={repository.id}>{repository.name}</li>
              ))}
            </ol>
          </>
        )}
    </>
  )
}

export default UserRepositories
