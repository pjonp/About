import React, { Component } from 'react'

export default class ContentCerts extends Component {
  render(){
    let certData = [
      {name: 'Responsive Web Design', image: '/images/certs/fccWebDesign.png', link: 'https://www.freecodecamp.org/certification/pjonp/responsive-web-design'},
      {name: 'JavaScript Algorithms & Data Structures', image: '/images/certs/fccJavascript.png', link: 'https://www.freecodecamp.org/certification/pjonp/javascript-algorithms-and-data-structures'},
      {name: 'Front End Libraries', image: '/images/certs/fccFrontEnd.png', link: 'https://www.freecodecamp.org/certification/pjonp/front-end-libraries'},
      {name: 'Data Visualization', image: '/images/certs/fccDataVis.png', link: 'https://www.freecodecamp.org/certification/pjonp/data-visualization'},
      {name: 'APIs and Microservices', image: '/images/certs/fccAPIs.png', link: 'https://www.freecodecamp.org/certification/pjonp/apis-and-microservices'},
      {name: 'Information Security & Quality Assurance', image: '/images/certs/fccISQA.png', link: 'https://www.freecodecamp.org/certification/pjonp/information-security-and-quality-assurance'},
      {name: 'Full Stack', image: '/images/certs/fccFullStack.png', link: 'https://www.freecodecamp.org/certification/pjonp/full-stack'},
    ]
    let certList = certData.map((d,i) => {
      return (
        <div className='certItem' key={d.name+'cert'}>
        <input type="checkbox" id={'cert'+i} />
<label htmlFor={'cert'+i}>
          <img className='certImg' alt={d.name + 'Certification'} src={process.env.PUBLIC_URL + d.image} />
          <p className='certText'>{d.name}</p>
          </label>
          </div> )
    })
    return(
      <div id='content_certs'>
        <h1>Certifications</h1>
        <div id='certContainer'>
          {certList}
        </div>
      </div>
    );
  }
}
