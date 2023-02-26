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
            className="w-[28px] h-[28px] object-contain text-white m-1.5"
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
            <input type="search" name="search" placeholder="Search user..." className="p-2.5 w-full text-sm rounded-l-lg" />
            <button type="submit" className="top-0 right-0 p-2.5 rounded-r-lg px-6 font-medium text-[16px] text-primary bg-blue-gradient outline-none">
            {/* <button type="submit" className="top-0 right-0 p-2.5 text-sm text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> */}
              <AiOutlineSearch />
            </button>
          </form>
        </div>
    </>
  )
}

export default SearchUser
