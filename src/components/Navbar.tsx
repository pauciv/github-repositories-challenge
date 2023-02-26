import { SearchUser } from '../components'

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        {/* <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" /> */}
        <SearchUser />
    </nav>
  )
}

export default Navbar