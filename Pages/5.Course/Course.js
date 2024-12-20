import React from 'react'
import './Course.css'
import { Link } from 'react-router-dom'
const Course = () => {
  const card = () =>
  {
    alert('Currently Unavailable Waiting For Future Updates')
  }
  return (
    <div>
        <div className="main-container">
          <div className="content-box">
            <div className="img-box-1">
              <div className='img-box-1'>
                <img className='card-1' src="https://demo.htmlcodex.com/2151/elearning-html-template/img/cat-1.jpg" alt="" />
                <Link onClick={card}><span>Full-stack Devaloper</span></Link>
              </div>
              <div className="mid-img">
                <div className='img-box-2'>
                  <img className='card-2' src="https://demo.htmlcodex.com/2151/elearning-html-template/img/cat-2.jpg" alt="" />
                  <Link onClick={card}><span>Graphic Design</span></Link>
                </div>
                <div className='img-box-3'>
                  <img className='card-3' src="https://demo.htmlcodex.com/2151/elearning-html-template/img/cat-3.jpg" alt="" />
                  <Link onClick={card}><span>Video Editing</span></Link>
                </div>
              </div>
            </div>
            <div className="img-box-2">
              <div className='img-box-4'>
                <img className='card-4' src="https://demo.htmlcodex.com/2151/elearning-html-template/img/cat-4.jpg" alt="" />
                <Link onClick={card}><span>Online Marketing</span></Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Course