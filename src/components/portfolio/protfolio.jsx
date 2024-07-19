import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="top--title">
          <div className="title" style={{ color: 'white', fontSize: '35px' }}>Portfolio Projects</div>
          <div className="portfolio--cards">
            <a href="https://heramind.com/home">
              <div className="full--cover">
                <img src="/images/project4.png" alt="" />
                <div className="chips">
                  <div className="chip">React <i className='bx bxl-react' style={{ fontSize: '18px' }}></i></div>
                  <div className="chip">Css <i className='bx bxl-css3' style={{ fontSize: '18px' }}></i></div>
                </div>
              </div>
            </a>
            <a href="http://103.144.11.214:7845/homeo/">
              <div className="full--cover">
                <img src="/images/project2.png" alt="" />
                <div className="chips">
                  <div className="chip">Bootstrap <i className='bx bxl-bootstrap' style={{ fontSize: '18px' }}></i></div>
                  <div className="chip">Js <i className='bx bxl-javascript' style={{ fontSize: '18px' }}></i></div>
                  <div className="chip">PHP <i className='bx bxl-php' style={{ fontSize: '18px' }}></i></div>
                </div>
              </div>
            </a>
            <a href="https://www.aandj.school/">
              <div className="full--cover">
                <img src="/images/project3.png" alt="" />
                <div className="chips">
                  <div className="chip">Node js <i className='bx bxl-javascript' style={{ fontSize: '18px' }}></i></div>
                  <div className="chip">React <i className='bx bxl-javascript' style={{ fontSize: '18px' }}></i></div>
                </div>
              </div>
            </a>
            <a href="http://103.144.11.214:7845/Jobs/">
              <div className="full--cover">
                <img src="/images/project1.png" alt="" />
                <div className="chips">
                  <div className="chip">HTML <i className='bx bxl-html5' style={{ fontSize: '18px' }}></i></div>
                  <div className="chip">CSS <i className='bx bxl-css3' style={{ fontSize: '18px' }}></i></div>
                  <div className="chip">PHP <i className='bx bxl-php' style={{ fontSize: '18px' }}></i></div>
                </div>
              </div>
            </a>
            <a href="https://www.greenapp.pk/">
              <div className="full--cover">
                <img src="/images/project5.png" alt="" />
                <div className="chips">
                  <div className="chip">HTML <i className='bx bxl-html5' style={{ fontSize: '18px' }}></i></div>
                  <div className="chip">CSS <i className='bx bxl-css3' style={{ fontSize: '18px' }}></i></div>
                </div>
              </div>
            </a>
            <a href="http://103.144.11.214:7845/export/export_investors/">
              <div className="full--cover">
                <img src="/images/project6.png" alt="" />
                <div className="chips">
                  <div className="chip">Bootstrap <i className='bx bxl-bootstrap' style={{ fontSize: '18px' }}></i></div>
                  <div className="chip">Js <i className='bx bxl-javascript' style={{ fontSize: '18px' }}></i></div>
                  <div className="chip">PHP <i className='bx bxl-php' style={{ fontSize: '18px' }}></i></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
