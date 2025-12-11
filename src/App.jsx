import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
