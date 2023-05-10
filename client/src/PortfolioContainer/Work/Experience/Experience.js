import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './Experience.css'
import * as MaterialDesign from "react-icons/md";

export default function Experience() {
  return (
    <div className='experience-container'>
        <div className='heading'>
            <span className='primary-text'>
                {" "}
                Work Experience
            </span>
        </div>
        <VerticalTimeline lineColor='	#ffa500'>
            <VerticalTimelineElement className='vertical-timeline-element--education'
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                icon={<MaterialDesign.MdLeaderboard/>}
                date='03/2023 - present'>
                    <div className='element-text'>
                    <h4 className="vertical-timeline-element-title">Research Assistant</h4>
                    <h6 className="vertical-timeline-element-subtitle">TRIP Lab in collaboration with Mahoney Lab UC Berkeley</h6>
                    <p>
                        <ul>
                            <li>Working on visualizing high-dimensional loss functions</li>
                            <li>Studying the different phases in model learning and understanding relationships of local and global metrics</li>
                        </ul>
                    </p>
                    </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--work'
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="07/2021 - 08/2022"
                icon={<MaterialDesign.MdComputer/>}>
                    <div className='element-text'>
                    <h4 className="vertical-timeline-element-title">Software Development Engineer</h4>
                    <h6 className="vertical-timeline-element-subtitle">Meesho - YCombinator Unicorn startup</h6>
                    <p>
                        <ul>
                            <li>Designed & implemented large scale cross-pod features catering to 20 Mil daily active users</li>
                            <li>Improved the lag in the async DB writes as a part of DB optimization tasks</li>
                            <li>Developed lambda functions and its setup to serve the requests from AWS lambda type Target Group</li>
                            <li>Owned the meesho product over web backend service</li>
                            <li>Automated the task of creating slack groups with the respective team’s oncalls which was used by 10 other teams making it easy to connect to required POC.</li>
                        </ul>
                    </p>
                    </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--work'
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //contentStyle={{ background: 'rgb(255,255,255)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                icon={<MaterialDesign.MdComputer/>}
                date='06/2020 - 08/2020'>
                    <div className='element-text'>
                    <h4 className="vertical-timeline-element-title">Software Development Intern</h4>
                    <h6 className="vertical-timeline-element-subtitle">RoadToNaukri (iona.ai)</h6>
                    <p>
                        <ul>
                            <li>Designed face-recognition module recognizing faces from the documents and live video using OpenCV</li>
                            <li>Developed the preprocessing module for the document-engine which improved text extraction by 20%</li>
                        </ul>
                    </p>
                    </div>
            </VerticalTimelineElement>
        </VerticalTimeline>

    </div>
  )
}
