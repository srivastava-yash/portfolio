import React from 'react'
import './Card.css'

export default function Card({college, degree}) {

    const isDartmouth = college.localeCompare("Dartmouth College");
    var classs = isDartmouth === 0 ? "upper-container" : "upper-container-nit";
    var time = isDartmouth === 0 ? "2022-present" : "2017-2021";
    var coursework = isDartmouth === 0 ? "Relevant Coursework: Artificial Intelligence, Database Systems, Machine Learning and Statistical Analysis, Data Science for Health, Deep Learning" : "Relevant Courses: Data Structures, Algorithms, Computer Architecture, Computer Networks, Computer Organisation, Cryptography";

    return (
    <div className='card'>
        <div className={classs} >
        </div>
    <div className='lower-container'>
        <h3 className='college'>{college}</h3>
        <h4 className='degree'>{degree}</h4>
        <h5 className='time'>{time}</h5>
        <p className='coursework'>{coursework}</p>
    </div>
    </div>
  )
}
