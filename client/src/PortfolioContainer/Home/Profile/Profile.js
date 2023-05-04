import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile () {
  return (
    <div className='profile-container'>
        <div className='profile-parent'> 
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='https://www.linkedin.com/in/srivastava-yash/'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    <a href='https://github.com/srivastava-yash'>
                        <i className='fa fa-github-square'></i>
                    </a>
                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'M <span className='highlighted-text'>Yash Srivastava</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical 
                            loop={Infinity}
                            steps={[ 
                                "Software Developer",
                                2000,
                                "Backend Developer",
                                2000,
                                "Machine Learning",
                                2000,
                                "Deep Learning",
                                2000,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Techie interested in building and scaling technology.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        Hire Me
                    </button>
                    <a href='Yash_Srivastava-Resume.pdf'>
                        <button className='btn highlighted-btn'>Resume</button>
                    </a>
                    <a href='Yash_Srivastava-Resume.pdf' download='Yash_Srivastava-Resume.pdf'>
                        <button className='btn highlighted-btn'>Download Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-backgroud'>

                </div>
            </div>
        </div>
    </div>
  )
}
