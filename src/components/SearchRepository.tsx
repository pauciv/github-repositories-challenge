import { ChangeEvent, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Repository } from '../api/getRepositoriesByUser';

interface SearchRepositoryProps {
    repositories: Repository[]
    setFilteredRepositories: React.Dispatch<React.SetStateAction<Repository[]>>
  }

const SearchRepository = ({ repositories, setFilteredRepositories }: SearchRepositoryProps) => {
    const [searchParmams, setSearchParams] = useSearchParams({ q: '' })
    const searchValue = searchParmams.get('q') || ''

    useEffect(() => {
        const filtered = repositories.filter((repository) =>
            repository.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        setFilteredRepositories(filtered)
    }, [searchValue, repositories, setFilteredRepositories, setSearchParams]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ q: event.target.value })
  }

  return (
    <Form>
        <Form.Control type="search" value={searchValue} onChange={handleChange} placeholder="Find repository..." />
    </Form>
  )
}

export default SearchRepository
