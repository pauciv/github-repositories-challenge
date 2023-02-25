import { useQuery } from "@tanstack/react-query"
import { FC, FormEvent, useState } from "react"
import { Button, Container, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { getRepositoriesByUser, getOneUser } from "../api"

const SearchBar: FC = () => {
  const [searchUser, setSearchUser] = useState('')
  
  const { data: user, status: userStatus, error } = useQuery({
    queryKey: ['user', searchUser],
    queryFn: () => getOneUser(searchUser),
    enabled: !!searchUser,
  })

  const userId = user?.id
  const username = user?.login

  const {
    data: repositories,
    status: repositoriesStatus,
    // fetchStatus,
  } = useQuery({
    queryKey: ['repositories', username],
    queryFn: () => getRepositoriesByUser(username),
    enabled: !!userId,
  })

  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const searchValue = event.currentTarget.search.value
    if (searchValue) {
      setSearchUser(searchValue)
      // navigate(`/${searchValue}`)
    }
  }

  return (
    <Container className="mt-3">
      <>
        <Form onSubmit={handleSubmit} className='d-flex'>
            <Form.Control type="text" name="search" placeholder="Find GitHub user..." />
            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
        {userStatus === 'loading' && <p>Loading...</p>}
        {userStatus === 'error' && <p>{JSON.stringify(error)}</p>}
        {user && <p>{user.name}</p>}

        {repositories && (
          <>
            <ol>
              {repositories?.map(repository => (
                <li key={repository.id}>{repository.name}</li>
              ))}
            </ol>
          </>
        )}
      </>
    </Container>
  )
}

export default SearchBar
