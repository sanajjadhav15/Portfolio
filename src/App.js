import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text">
        <Header />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App