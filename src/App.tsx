import { Routes, Route } from 'react-router-dom'
import { Home, User } from './pages'
import { Navbar } from './components'
import styles from './style'

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
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
