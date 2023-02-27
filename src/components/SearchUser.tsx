import { FC, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AiOutlineSearch, AiOutlineArrowLeft } from 'react-icons/ai'

const SearchUser: FC = () => {
  const [toggle, setToggle] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const searchValue = event.currentTarget.search.value
    searchValue && navigate(`/${searchValue}`)
  }

  return (
    <>
      <h1 className={`${toggle && "sm:flex hidden"} font-poppins font-bold text-gradient text-[24px]`}>GitHub Repos</h1>
      <form onSubmit={handleSubmit} className='sm:flex hidden justify-end flex-1 relative'>
            <input type="search" name="search" placeholder="Search user..." className="p-2 w-1/2 rounded-l-lg" />
            <button type="submit" className="p-3 rounded-r-lg px-6 font-medium text-[16px] text-primary bg-blue-gradient outline-none">
              <AiOutlineSearch />
            </button>
      </form>

        <div className={`sm:hidden flex justify-end items-center ${toggle && "w-full"}`}>
          {!toggle ? 
          <AiOutlineSearch
            className="w-[28px] h-[28px] object-contain text-white m-2"
            onClick={() => setToggle(prev => !prev)}
          />
             : 
          <AiOutlineArrowLeft
             className="w-[28px] h-[28px] object-contain text-white mr-4"
             onClick={() => setToggle(prev => !prev)}
          />}

          <form
            onSubmit={handleSubmit} className={`${!toggle ? "hidden" : "flex"} rounded-xl w-full`}
          >
            <input type="search" name="search" placeholder="Search user..." className="p-2.5 w-full rounded-l-lg" />
            <button type="submit" className="top-0 right-0 p-2.5 rounded-r-lg px-6 font-medium text-[16px] text-primary bg-blue-gradient outline-none">
              <AiOutlineSearch />
            </button>
          </form>
        </div>
    </>
  )
}

export default SearchUser
