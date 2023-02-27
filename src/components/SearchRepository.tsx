import { ChangeEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Repository } from '../interfaces';

type SearchRepositoryProps = {
  repositories: Repository[]
  setFilteredRepositories: React.Dispatch<React.SetStateAction<Repository[] | undefined>>
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
    <form className='p-4'>
      <input type="search" value={searchValue} onChange={handleChange} placeholder="Find repository..." className='rounded-l-lg rounded-r-lg py-[6px] px-4 bg-discount-gradient text-white w-full max-w-xl border border-slate-600' />
    </form>
  )
}

export default SearchRepository
