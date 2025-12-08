import React from 'react'
import { useJsonData } from '../../hooks/useJsonData'
import { AboutData } from '../../types'

const About: React.FC = () => {
  const { data: aboutData, loading, error } = useJsonData<AboutData>('/assets/data/about.json');

  if (loading) {
    return (
      <section className="about section" id="about">
        <div className="container loading">Loading</div>
      </section>
    );
  }

  if (error) {
    console.error('Error loading about data:', error);
    return (
      <section className="about section" id="about">
        <div className="container">Error loading about information.</div>
      </section>
    );
  }

  return (
    <section className="about section" id="about">
      <h2 className="section__title">{aboutData?.title || 'About Me'}</h2>

      <div className="about__container container grid">
        <div className="about__data">
          <p className="about__description">
            {aboutData?.description || 'Loading description...'}
          </p>

          <div className="about__buttons" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            {aboutData?.resume && (
              <a
                href={aboutData.resume}
                className="button button--flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Full Resume<i className="uil uil-cloud-download button__icon"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
