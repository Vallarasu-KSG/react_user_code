import React from 'react'
import './About.css'
const About = () => {
  const AboutReadMore = () =>
  {
    alert('Currently Unavailable Waiting For Future Updates')
  }
  return (
    <div className='about-container'>
      <div className="section-1-container">
        <div className="card">
          <span><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg></span>
          <h2>Skilled Instructors</h2>
          <p>Experienced educators who provide expert guidance and support to enhance students' learning outcomes.</p>
        </div>
        <div className="card">
          <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg></span>
          <h2>Online Classes</h2>
          <p>Flexible, virtual learning environments that allow students to access educational content from anywhere at their convenience.</p>
        </div>
        <div className="card">
          <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M200-160v-366L88-440l-48-64 440-336 160 122v-82h120v174l160 122-48 64-112-86v366H520v-240h-80v240H200Zm80-80h80v-240h240v240h80v-347L480-739 280-587v347Zm120-319h160q0-32-24-52.5T480-632q-32 0-56 20.5T400-559Zm-40 319v-240h240v240-240H360v240Z"/></svg></span>
          <h2>Home Projects</h2>
          <p>Practical activities designed for individuals or families to complete at home, fostering creativity and hands-on skills.</p>
        </div>
        <div className="card">
          <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z"/></svg></span>
          <h2>Book Library</h2>
          <p>A curated collection of books available for borrowing, encouraging reading and lifelong learning within the community.</p>
        </div>
      </div>
      <div className="section-2-container">
        <div className="container-1">
          <img src="https://demo.htmlcodex.com/2151/elearning-html-template/img/about.jpg" alt="" />
        </div>
        <div className="container-2">
          <h1>Welcome to eLEARNING</h1>
          <p>Welcome to eLEARNING, a digital platform designed to facilitate interactive and accessible education for learners of all ages.</p>
          <p>Welcome to eLEARNING, where innovative technology meets education to provide engaging learning experiences. Our platform offers a wide range of courses, resources, and support to help you achieve your academic and personal goals from the comfort of your home.</p>
          <div className='list'>
            <h4><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fff"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>Skilled Instructors</h4>
            <h4><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fff"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>Online Classes</h4>
            <h4><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fff"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>Home Projects</h4>
            <h4><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fff"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>Book Library</h4>
          </div>
          <button onClick={AboutReadMore}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default About