import React, { useState } from 'react'
import { useJsonData } from '../../hooks/useJsonData'
import { QualificationData, QualificationItem } from '../../types'

type TabType = 'work' | 'education';

const Qualification: React.FC = () => {
  const { data: qualifications, loading, error } = useJsonData<QualificationData>('/assets/data/qualification.json');
  const [activeTab, setActiveTab] = useState<TabType>('work');

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
        <div className="container loading">Loading qualifications</div>
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
          <div
            className={`qualification__button button--flex ${activeTab === 'work' ? 'qualification__active' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work experience
          </div>
          <div
            className={`qualification__button button--flex ${activeTab === 'education' ? 'qualification__active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          {/* ==================== WORK EXPERIENCE ==================== */}
          <div className={`qualification__content ${activeTab === 'work' ? 'qualification__active' : ''}`} data-content>
            {qualifications?.work?.map((work, index) =>
              renderQualificationItem(work, index, qualifications.work)
            )}
          </div>

          {/* ==================== EDUCATION ==================== */}
          <div className={`qualification__content ${activeTab === 'education' ? 'qualification__active' : ''}`} data-content>
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
