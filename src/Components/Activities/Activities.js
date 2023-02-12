import React from 'react'
import RobotScreen from '../Images/RobotScreen.gif'
import ActivitiesTop from '../Images/ActivitiesTop.png'
import ActivitiesContent from '../Images/ActivitiesContent.png'
import './Activities.css'
import './ActivitiesPhone.css'

export default function Activities() {
  return (
    <div>
      <div id='ActivitiesHeadID' className="ActivitiesHead">
        <div>
          <h1>Workshops by our Team CiPHER</h1>
          <img className='ActivitiesHeadImgPhone' src={RobotScreen} />
          <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that "Sharing Knowledge ensures the entry of New," thus our team hosts an annual "Robotics workshop" to assist students in expanding their knowledge and diving into the realm of robotics. We teach students numerous robotics principles and assist them in implementing them in their projects.
          </p>
        </div>
        <img className='ActivitiesHeadImg' src={RobotScreen} />
      </div>
      <div className="ActivitiesTop">
        <img src={ActivitiesTop} />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
        </p>
      </div>
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
        <h1>Projects</h1>
      </div>
      <div className="ProjectContainer">
        <span>
          Heading
        </span>
        <img src={ActivitiesContent} />
        <p>
          With a never-ending desire to push the boundaries of robotics, our team also believes that "Sharing Knowledge ensures the entry of New," thus our team hosts an annual "Robotics workshop" to assist students in expanding their knowledge and diving into the realm of robotics. We teach students numerous robotics principles and assist them in implementing them in their projects. With a never-ending desire to push the boundaries of robotics, our team also believes that "Sharing Knowledge ensures the entry of New," thus our team hosts an annual
        </p>
      </div>
      <div className="ProjectContainer">
        <span>
          Heading
        </span>
        <img src={ActivitiesContent} />
        <p>
          With a never-ending desire to push the boundaries of robotics, our team also believes that "Sharing Knowledge ensures the entry of New," thus our team hosts an annual "Robotics workshop" to assist students in expanding their knowledge and diving into the realm of robotics. We teach students numerous robotics principles and assist them in implementing them in their projects. With a never-ending desire to push the boundaries of robotics, our team also believes that "Sharing Knowledge ensures the entry of New," thus our team hosts an annual
        </p>
      </div>
      {/* <div className="ActivitiesContentOut">
        <div className='ActivitiesContentL'>
          <img src={ActivitiesContent} />
          <div className='ActivitiesContentP'></div>
          <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that "Sharing Knowledge ensures the entry of New," thus our team hosts an annual "Robotics workshop" to assist students in expanding their knowledge and diving into the realm of robotics. We teach students numerous robotics principles and assist them in implementing them in their projects.
          </p>
        </div>
        <div className='ActivitiesContentR'>
          <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that "Sharing Knowledge ensures the entry of New," thus our team hosts an annual "Robotics workshop" to assist students in expanding their knowledge and diving into the realm of robotics. We teach students numerous robotics principles and assist them in implementing them in their projects.
          </p>
          <div className='ActivitiesContentP'></div>
          <img src={ActivitiesContent} />
        </div>
      </div> */}
    </div>
  )
}
