import React from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import Qualification from '../Qualification/Qualification'

const Main: React.FC = () => {
  return (
    <main className="main">
      {/* ==================== HOME ==================== */}
      <Home />

      {/* ==================== ABOUT ==================== */}
      <About />

      {/* ==================== QUALIFICATION ==================== */}
      <Qualification />
    </main>
  )
}

export default Main
