
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Animals from './pages/Animals'
import Membership from './pages/Membership'
import Contact from './pages/Contact'
import './Responsive.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='services' element={<Services/>} />
      <Route path='animals' element={<Animals/>} />
      <Route path='membership' element={<Membership/>} />
      <Route path='contact' element={<Contact/>} />
    </Route>
  )
)
function App() {

  return <RouterProvider router={router}/>
}

export default App
