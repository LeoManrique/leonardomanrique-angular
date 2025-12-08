import React from 'react'
import { useJsonData } from '../../hooks/useJsonData'
import { HomeData } from '../../types'

const Home: React.FC = () => {
  const { data: homeData, loading, error } = useJsonData<HomeData>('/assets/data/home.json');

  if (loading) {
    return (
      <section className="home section" id="home">
        <div className="container">Loading...</div>
      </section>
    );
  }

  if (error) {
    console.error('Error loading home data:', error);
    return (
      <section className="home section" id="home">
        <div className="container">Error loading home information.</div>
      </section>
    );
  }

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            {homeData?.socialLinks?.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="home__social-icon"
                aria-label={link.name}
              >
                <i className={`uil ${link.icon}`}></i>
              </a>
            ))}
          </div>

          <div className="home__img">
            <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs>
                <clipPath id="clip0">
                  <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                  130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                  97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                  0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                </clipPath>
              </defs>
              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
              165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
              129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
              -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              fill="var(--first-color)"/>
              <image className="home__blob-img" x='12' y='-5' xlinkHref={homeData?.profileImage || '/assets/img/profile.png'} clipPath="url(#clip0)"/>
            </svg>
          </div>

          <div className="home__data">
            <h1 className="home__title">{homeData?.title || 'Hi, I\'m Leonardo'}</h1>
            <h3 className="home__subtitle">{homeData?.subtitle || 'Backend Developer'}</h3>
            <p className="home__description">
              {homeData?.description || 'High level experience in software development knowledge, producing quality work.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home
