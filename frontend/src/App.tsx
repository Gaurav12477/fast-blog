
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blogs'
import SingleBlog from './pages/SingleBlog'
import Publish from './pages/Publish'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Blog/> } />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/blog/:id' element={<SingleBlog/>} />
          <Route path='/publish' element={<Publish/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
