import { useQuery } from "@tanstack/react-query"
import { FC, FormEvent, useState } from "react"
import { Button, Container, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const SearchUser: FC = () => {
  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const searchValue = event.currentTarget.search.value
    searchValue && navigate(`/${searchValue}`)
  }

  return (
    <Container className="mt-3">
        <Form onSubmit={handleSubmit} className='d-flex'>
            <Form.Control type="text" name="search" placeholder="Find GitHub user..." />
            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    </Container>
  )
}

export default SearchUser
