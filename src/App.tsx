import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import ScrollUp from './components/ScrollUp/ScrollUp'
import { useScrollEffects } from './hooks/useScrollEffects'
import './App.css'

function App() {
  // Initialize scroll effects
  useScrollEffects();

  useEffect(() => {
    // Load external JavaScript after component mounts
    const script = document.createElement('script')
    script.src = '/assets/js/main.js'
    script.type = 'text/javascript'
    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
