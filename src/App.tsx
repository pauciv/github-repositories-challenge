import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home, User } from './pages'
import { Navbar } from './components'

function App() {
  return (
    <>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:username' element={<User />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
