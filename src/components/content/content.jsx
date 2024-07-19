import React from 'react'
import './content.css';

const content = () => {
  return (
    <section className='home'>
      <div className="home-content">
        <h1 style={{color: 'white'}}>Hi, I'm Yusuf sarwar</h1>
        <h3>Frontend developer</h3>
        <p style={{color: 'white', display:'flex'}}>I am a passionate full-stack developer with expertise in both front-end and back-end technologies. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like ReactJS and Bootstrap, I specialize in crafting intuitive user interfaces and seamless experiences. On the backend, I excel in Node.js, Laravel, and PHP, delivering scalable solutions and APIs that drive functionality and performance.</p>
        <div className="btn-box">
          <a href="#">Hire me</a>
       <a href="https://api.whatsapp.com/send?phone=03060840812">Let's Talk <i className='bx bxl-whatsapp'></i></a>

        </div>
      </div> 
      <div className="home-sci">
        <a href="#"><i className='bx bxl-facebook'></i></a>
        <a href="#"><i className='bx bxl-twitter'></i></a>
        <a href="#"><i className='bx bxl-linkedin'></i></a>
      </div>
      <span className="home-imageHover">
        
      </span>
    </section>
  )
}

export default content