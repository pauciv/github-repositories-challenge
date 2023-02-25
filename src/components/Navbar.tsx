import { Navbar as BoostrapNavbar } from 'react-bootstrap'
import { SearchUser } from '../components'

const Navbar = () => {
  return (
    <BoostrapNavbar className='shadow-sm mb-3'>
        <p>LOGO</p>
        <SearchUser />
    </BoostrapNavbar>
  )
}

export default Navbar