import './App.css'
import Navigation from './components/Navbar/Navigation.jsx'
import { AccessibilityInfo } from './components/accessibilityInfo/accessibilityInfo.jsx'
import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const LazyHomePage = lazy(() => import('./sections/MainContent.jsx'))
const LazyProjectDetails = lazy(() => import('./sections/projectDetail/ProjectDetail.jsx'))

function App() {

  return (
    <>
      <Navigation />
      <div className='porfolio-content'>
        <Suspense fallback={<div style={{height: '100vh', width: '100vw', backgroundColor: 'var(--secondary-color)', position: 'fixed', zIndex: 9999}}></div>}>
            <Routes>
              <Route path="/" element={<LazyHomePage />} />
              <Route path="/project/:name" element={<LazyProjectDetails />} />
            </Routes>
        </Suspense>
      </div>
      <AccessibilityInfo />
    </>
  )
}

export default App
