import React from 'react'
import HiRobot from '../Images/HiRobot.gif'
import ActivitiesContent from '../Images/ActivitiesContent.png'
import ProfileImg from '../Images/ProfileImg.png'
import '../Activities/Activities.css'
import '../Activities/ActivitiesPhone.css'
import './AboutUs.css'
import './AboutUsPhone.css'

export default function AboutUs() {
  return (
    <div>
      <div id='AboutUsHeadID' className="ActivitiesHead">
        <div>
          <h1 className='AboutUsHead'>About Us</h1>
          <img className='ActivitiesHeadImgPhone' src={HiRobot} />
          <p>
            We are Team CIPHER, the official Robocon team of JSPM Rajarshi Shahu College of Engineering, Tathawade, Pune, India. Our team is run by undergraduate students coming from different disciplines of engineering. Our team participates in the International Robotics Competition, ABU ROBOCON, annually. Apart from this, we conduct various workshops for students to help them explore the field of robotics.
          </p>
        </div>
        <img className='ActivitiesHeadImg' src={HiRobot} />
      </div>
      <div className="AboutUsTop">
        Our team is dedicated to investigating the different future possibilities and believes that genuine freedom and boundless potential for mankind can only be achieved through the growth of science and technology. We are continually experimenting with new technologies and attempting to produce efficient robots with the least amount of resources.
      </div>
      <div className="ActivitiesHead ProjectHead">
        <h1>Achievements</h1>
      </div>
      <p className="AchievementsSubHead">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
      </p>
      <div className="ActivitiesContentOut">
        <div className='ActivitiesContent'>
          <span>
            Heading
          </span>
          <img src={ActivitiesContent} />
          <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that
          </p>
        </div>
        <div className='ActivitiesContent'>
          <span>
            Heading
          </span>
          <img src={ActivitiesContent} />
          <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that
          </p>
        </div>
      </div>
      <div className="ActivitiesHead ProjectHead">
        <h1>Gallery</h1>
      </div>
      <div className="GalleryOut">
        <img src={ActivitiesContent} />
        <img src={ActivitiesContent} />
        <img src={ActivitiesContent} />
        <img src={ActivitiesContent} />
        <img src={ActivitiesContent} />
        <img src={ActivitiesContent} />
        <img src={ActivitiesContent} />
        <img src={ActivitiesContent} />
        <img src={ActivitiesContent} />
      </div>
      <div className="ActivitiesHead ProjectHead">
        <h1>About Alumni</h1>
      </div>
      <div id='AlumniContainer' className='AlumniContainer'>
        <img src={ProfileImg} alt="Alumni" />
        <div>
          <span>
            Tapan Patil
          </span>
          <p>
            To become a team that builds robots with capabilities of solving problems of our society and thus creating a better tomorrow.
          </p>
        </div>
      </div>
      <div id='AlumniContainer' className='AlumniContainer'>
        <img src={ProfileImg} alt="Alumni" />
        <div>
          <span>
            Tapan Patil
          </span>
          <p>
            To become a team that builds robots with capabilities of solving problems of our society and thus creating a better tomorrow.
          </p>
        </div>
      </div>
      <div id='AlumniContainer' className='AlumniContainer'>
        <img src={ProfileImg} alt="Alumni" />
        <div>
          <span>
            Tapan Patil
          </span>
          <p>
            To become a team that builds robots with capabilities of solving problems of our society and thus creating a better tomorrow.
          </p>
        </div>
      </div>
      <div id='AlumniContainer' className='AlumniContainer'>
        <img src={ProfileImg} alt="Alumni" />
        <div>
          <span>
            Tapan Patil
          </span>
          <p>
            To become a team that builds robots with capabilities of solving problems of our society and thus creating a better tomorrow.
          </p>
        </div>
      </div>
      <div id='AlumniContainer' className='AlumniContainer'>
        <img src={ProfileImg} alt="Alumni" />
        <div>
          <span>
            Tapan Patil
          </span>
          <p>
            To become a team that builds robots with capabilities of solving problems of our society and thus creating a better tomorrow.
          </p>
        </div>
      </div>
    </div>
  )
}
