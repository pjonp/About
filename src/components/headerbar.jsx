import React, { Component } from 'react'

export default class Headerbar extends Component {
  render(){
    return(
    <div id='headercontainer'>
      <div id='headerbar'>
      <div id='headerbar-intro'>
        <h1>pjonp</h1>
      </div>
      <nav id='headerbar-links'>
        <div><a href='#content_intro'>Intro</a></div>
        <div><a href='#content_certs'>Certifications</a></div>
        <div><a href='#content_projects'>Projects</a></div>
        <div><a href='#content_experience'>Experience</a></div>
      </nav>
      </div>
    </div>
    );
  }
}
