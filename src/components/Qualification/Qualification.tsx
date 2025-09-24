import React, { useEffect } from 'react'
import { useJsonData } from '../../hooks/useJsonData'
import { QualificationData, QualificationItem } from '../../types'
import { TabUtils } from '../../utils/tabs'

const Qualification: React.FC = () => {
  const { data: qualifications, loading, error } = useJsonData<QualificationData>('/assets/data/qualification.json');

  useEffect(() => {
    if (!loading && qualifications) {
      // Initialize tab functionality after data is loaded
      setTimeout(() => {
        TabUtils.initializeTabs();
      }, 100);
    }
  }, [loading, qualifications]);

  const renderQualificationItem = (item: QualificationItem, index: number, array: QualificationItem[]) => {
    const isLast = index === array.length - 1;

    if (item.position === 'left') {
      return (
        <div key={index} className={`qualification__data qualification__${item.position}`}>
          <div>
            <h3 className="qualification__title">{item.title}</h3>
            <span className="qualification__subtitle">{item.subtitle}</span>
            <div className="qualification__calendar">
              <i className="uil uil-calendar-alt"></i>
              {item.date}
            </div>
          </div>
          <div>
            <span className="qualification__rounder"></span>
            {!isLast && <span className="qualification__line"></span>}
          </div>
        </div>
      );
    } else {
      return (
        <div key={index} className={`qualification__data qualification__${item.position}`}>
          <div></div>
          <div>
            <span className="qualification__rounder"></span>
            {!isLast && <span className="qualification__line"></span>}
          </div>
          <div>
            <h3 className="qualification__title">{item.title}</h3>
            <span className="qualification__subtitle">{item.subtitle}</span>
            <div className="qualification__calendar">
              <i className="uil uil-calendar-alt"></i>
              {item.date}
            </div>
          </div>
        </div>
      );
    }
  };

  if (loading) {
    return (
      <section className="qualification section" id="qualification">
        <div className="container">Loading qualifications...</div>
      </section>
    );
  }

  if (error) {
    console.error('Error loading qualification data:', error);
    return (
      <section className="qualification section" id="qualification">
        <div className="container">Error loading qualification information.</div>
      </section>
    );
  }

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex qualification__active" data-target='#work'>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work experience
          </div>
          <div className="qualification__button button--flex" data-target='#education'>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          {/* ==================== WORK EXPERIENCE ==================== */}
          <div className="qualification__content qualification__active" data-content id="work">
            {qualifications?.work?.map((work, index) =>
              renderQualificationItem(work, index, qualifications.work)
            )}
          </div>

          {/* ==================== EDUCATION ==================== */}
          <div className="qualification__content" data-content id="education">
            {qualifications?.education?.map((edu, index) =>
              renderQualificationItem(edu, index, qualifications.education)
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
