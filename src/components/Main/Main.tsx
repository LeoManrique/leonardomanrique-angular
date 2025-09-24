import React from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import Services from '../Services/Services'
import Qualification from '../Qualification/Qualification'

const Main: React.FC = () => {
  return (
    <main className="main">
      {/* ==================== HOME ==================== */}
      <Home />

      {/* ==================== ABOUT ==================== */}
      <About />

      {/* ==================== SERVICES ==================== */}
        {/*<Services />*/}

      {/* ==================== QUALIFICATION ==================== */}
      <Qualification />

      {/* ==================== PORTFOLIO ==================== */}
      {/* <section className="portfolio section" id="portfolio">

      </section> */}

      {/* ==================== PROJECT IN MIND ==================== */}
      {/* <section className="project section">

      </section> */}

      {/* ==================== TESTIMONIAL ==================== */}
      {/* <section className="testimonial section">

      </section> */}

      {/* ==================== CONTACT ME ==================== */}
      {/* <section className="contact section" id="contact">

      </section> */}
    </main>
  )
}

export default Main
