import React from 'react'
import Card from './Card/Card'
import './Education.css'

export default function Education() {

  
  return (
    <div className='container'>
      <div className='heading'>
            <span className='primary-text-edu'>
                {" "}
                Education
            </span>
        </div>
        <div className='container-element'>
          <Card college={'Dartmouth College'} degree={'MS in Computer Science'}/>
        </div>
        <div className='container-element element-two'>
          <Card college={'NIT Allahabad'} degree={'BTech in Computer Science Engineering'}/>
        </div>
    </div>
  )
}
