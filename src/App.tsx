import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home, Repositories } from './pages'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <>
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:username' element={<Repositories />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
