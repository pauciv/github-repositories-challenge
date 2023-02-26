import { FC, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { close, menu } from "../assets"
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
      <p className={`${toggle && "sm:flex hidden"} text-white`}>logo</p>
      <form onSubmit={handleSubmit} className='sm:flex hidden justify-center items-center flex-1 relative'>
            <input type="search" name="search" placeholder="Search user..." className="p-2.5 w-1/2 z-20 text-sm rounded-l-lg" />
            <button type="submit" className="top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Search
            </button>
      </form>

        <div className={`${toggle ? "justify-end" : "justify-start"} sm:hidden flex justify-between items-center my-2 w-full`}>
          {!toggle ? 
          <AiOutlineSearch
          className="w-[28px] h-[28px] object-contain text-white flex justify-self-end"
          onClick={() => setToggle(!toggle)}
        />
             : 
             <AiOutlineArrowLeft
             className="w-[28px] h-[28px] object-contain text-white"
             onClick={() => setToggle(!toggle)}
           />}

          <form
            onSubmit={handleSubmit} className={`${!toggle ? "hidden" : "flex"} rounded-xl`}
          >
            <input type="search" name="search" placeholder="Search user..." className="p-2.5 w-full z-20 text-sm rounded-l-lg" />
            <button type="submit" className="top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <AiOutlineSearch />
            </button>
          </form>
        </div>
    </>
        


  )
}

export default SearchUser
