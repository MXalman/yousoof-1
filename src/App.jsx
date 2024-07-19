import './App.css'
import Navbar from './components/navbar/navbar';
import Content from './components/content/content';
import Skills from './components/skills/skills';
import ExpEdu from './components/exp_edu/expEdu';
import Protfolio from './components/portfolio/protfolio';
import Contact from './components/contact/contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <>
          <div style={{ backgroundColor: '#00514A', height: '100vh'}}>
            <Navbar />
            <Content />
          </div>
        </>
    },
    {
      path: '/skills',
      element:
        <>
          <div style={{ backgroundColor: '#00514A', height: '210vh' }}>
            <Navbar />
            <Skills />
          </div>
        </>
    },
    {
      path: '/Exp/Edu',
      element: <><div style={{ backgroundColor: '#00514A', height: '220vh' }}><Navbar /> <ExpEdu /></div></>
    },
    {
      path: '/portfolio',
      element: <><div style={{ backgroundColor: '#00514A', height: '180vh' }}><Navbar /> <Protfolio /></div></>
    },
    {
      path: '/contact',
      element: <><div style={{ backgroundColor: '#00514A', height: '140vh' }}><Navbar /> <Contact /> </div></>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
