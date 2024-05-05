import React from 'react'
import ExperienceItem from './ExperienceItem'

const Experience = () => {
  return (
      <>
          <section id='experience'>
            <h2>Experience</h2>
            <div className='main-container'>
              <div className='experience-container'>
                <ExperienceItem />
              </div>
            </div>
          </section>
          
      </>
  )
}

export default Experience
