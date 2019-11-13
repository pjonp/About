import React, { Component } from 'react'

export default class ContentIntro extends Component {
  render(){
    return(
      <div id='content_intro'>
        <h1>P. Jon P.</h1>
        <div id='introContainer'>
          <h3>Looking to apply over ten years experience of design and problem solving in the mechanical engineering industry to computer programing.</h3>
          <br />
          <br />
          <p className='websiteNote' id='websiteNote'>This website was built from Facebook's <a href='https://github.com/facebook/create-react-app' rel='noopener noreferrer' target='_blank'><em>create-react-app</em></a> with no additonal scripts imported. Personal information has been omited for this public project. For contact information and references, please refer to the resume submited.</p>
        </div>
      </div>
    );
  }
}
