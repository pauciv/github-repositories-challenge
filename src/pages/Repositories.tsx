import { useQuery } from "@tanstack/react-query"
import { Col, Row } from "react-bootstrap"

const Repositories = () => {
  // repositories query

  if (status === 'loading') {
    return <p>Loading...</p>
  } 

  return (
    <>
        <h1>Repositories</h1>
        {/* {status === 'loading' && <p>Loading...</p>}
        {status === 'error' && <p>{JSON.stringify(error)}</p>}
        {repositories && (
          <>
            <h1>Repositories</h1>
            <Row>
              {repositories?.map(repository => (
                <p key={repository.id}>{repository.name}</p>
              ))}
            </Row>
          </>
        )} */}
    </>
  )
}

export default Repositories
