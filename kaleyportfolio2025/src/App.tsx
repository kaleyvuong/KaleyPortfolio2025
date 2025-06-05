import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css'

const Intro = lazy(() => import('./components/Intro'));

function App() {
  return (
    <>
      <Router basename='/'>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Intro />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
