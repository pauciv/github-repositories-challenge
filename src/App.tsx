import { Routes, Route } from 'react-router-dom'
import { Home, User } from './pages'
import { Navbar } from './components'
import styles from './style'

const App = () => (
  <div className='w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter} fixed top-0 z-50 w-full bg-gray-900 border-b border-slate-900`}>
      <div className={`${styles.boxWidth} bg-gray-900`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:username' element={<User />} />
        </Routes>
      </div>
    </div>
  </div>
)

export default App
