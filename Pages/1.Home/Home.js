import React from 'react'
import './Home.css'
import img1 from '../Images/Pic-1.png'
import { Link } from 'react-router-dom'
const Home = () => {

  const ReadMore = () =>
  {
    alert('Currently Unavailable Waiting For Future Updates')
  }
  return (
    <div className='home-container'>
        <div className='main-container'>
            <div className="content-container">
              <h3>BEST ONLINE COURSES</h3>
              <h1>The Best Online <br/> Learning Platform</h1>
              <p>The best online learning platforms offer a diverse range of courses, enabling learners to acquire new skills at their own pace. With interactive content, expert instructors, and flexible scheduling, these platforms make education accessible to everyone, anywhere.</p>
              <div className='content-btn'>
                <button onClick={ReadMore}>Read More</button>
                <Link to={'/Invoice'}><button>Join Now</button></Link>
              </div>
            </div>
            <div className='content-container-2'>
              <img src={img1} alt="images" />
            </div>
        </div>
    </div>
  )
}

export default Home