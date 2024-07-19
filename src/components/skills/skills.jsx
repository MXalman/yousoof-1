import React from 'react'
import "./skills.css";

const Services = () => {
  return (
    <>
      <div className="main">
        <section className='service-section section-padding' id='services'>

          <div className="container">
            <div className="row">
              <div className="section-title text-align">
                <h5 className="sub-title">Skills</h5>
                <h3 className="main-title" style={{ color: 'white' }}>Programming Languages I know</h3>
                <ul className="line">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>

              <div className="row services-row" >
                <div className="services-item">
                  <div className="services-item-inner">
                    <i className='bx bxl-react' style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3>React Js</h3>
                </div>
                <div className="services-item">
                  <div className="services-item-inner">
                    <i className='bx bxl-nodejs' style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3>Node Js</h3>
                </div>
                <div className="services-item">
                  <div className="services-item-inner">
                    <i className='bx bxl-javascript' style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3>javaScript</h3>
                </div>
                <div className="services-item">
                  <div className="services-item-inner">
                    <i className='bx bxl-bootstrap' style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3>Bootstrap</h3>
                </div>
                <div className="services-item">
                  <div className="services-item-inner">
                    <i className='bx bxl-css3' style={{ fontSize: '48px' }}></i>
                    <i className='bx bxl-html5' style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3>HTML / CSS</h3>
                </div>
                <div className="services-item">
                  <div className="services-item-inner">
                    <i className='bx bxl-php' style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3>PHP</h3>
                </div>
                <div className="services-item">
                  <div className="services-item-inner">
                    <i className='bx bxl-tailwind-css' style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3>Tailwind Css</h3>
                </div>
                <div className="services-item">
                  <div className="services-item-inner">
                    <i className='bx bxl-' style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3>Laravel</h3>
                </div>
                <div className="services-item">
                  <div className="services-item-inner">
                    <i className='bx bxl-' style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3>Next Js</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Services