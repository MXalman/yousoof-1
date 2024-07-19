import '../skills/skills.css'
import './expedu.css'

import React from 'react'

const expEdu = () => {
  return (
    < >
      <section style={{ height: '80rem' }} className='main'>
        <div className="resume">
          <div className="container">
            <div className="top-title" style={{ fontSize: '35px', color: 'white' }}>resume</div>
            <h2 className="title" style={{ color: 'white' }}>My <span> Education </span></h2>
            <div>
              <div className="experience">
                <p className="date" style={{ color: 'white' }}>2021 - 2023</p>
                <h3>Masters in Computer Science</h3>
                <p className="company" style={{ color: 'white' }} >Islamia University Bahawal-pur</p>
                <div className="circle"></div>
              </div>
              <div className="experience">
                <p className="date" style={{ color: 'white' }}>2019 - 2021</p>
                <h3>Advanced Computer Science (ACS)</h3>
                <p className="company" style={{ color: 'white' }}>Govt. post graducate college BahawalNagar</p>
                <div className="circle"></div>
              </div>
              <div className="experience">
                <p className="date" style={{ color: 'white' }}>2017 - 2019</p>
                <h3>Intermediate Computer Science (ICS)</h3>
                <p className="company" style={{ color: 'white' }}>Leeds Group Of Colleges</p>
                <div className="circle"></div>
              </div>
              <div className="experience">
                <p className="date" style={{ color: 'white' }}>Matric</p>
                <h3>Computer Science</h3>
                <p className="company" style={{ color: 'white' }}>Leeds School</p>
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="services" style={{ marginTop: '600px' }}>
          <div className="lift_up">
            <div className="container">
              <div className="top--title" style={{ color: 'white', fontSize: '35px', marginTop: '65px' }}> <u> Expertise </u></div>
              <h2 className="title">My <span>Experience</span></h2>
              <div className="services">
                <div className="service" style={{ backgroundColor: '#28a99e' }}>
                  <h2 style={{ color: 'white' }}>Web Developer</h2>
                  <p><h4 style={{ display: 'inline-block', marginRight: '10px', color: '#025043' }}>Company:</h4><span style={{ color: 'white' }}>Green Pay Smc Bahawal Nagar</span></p>

                  <a href="" className='projects' style={{ color: 'black' }}>01 Year of Experience</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default expEdu