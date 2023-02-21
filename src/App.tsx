import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Overview, Projects, Repositories } from './pages'
import { Navbar } from './components'



function App() {
  return (
    <>
    <Navbar />
    <Container className='mb-4'>
      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/repositories' element={<Repositories />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Container>
    </>
  )
}

export default App
