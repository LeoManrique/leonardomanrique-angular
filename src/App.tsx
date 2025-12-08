import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { useScrollEffects } from './hooks/useScrollEffects'
import './App.css'

function App() {
  // Initialize scroll effects
  useScrollEffects();

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
