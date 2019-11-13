import React, {Component} from 'react';
import logo from '../logo.svg';

export default class Sidebar extends Component {
  render(){
    let updateColor = ()=>{
      document.getElementById('sidebarSlider').checked = false;
      let websiteNote = document.getElementById('websiteNote')
      if(websiteNote.className.includes('redGlow')){
        return
      }
      websiteNote.classList.add('redGlow')
      setTimeout(()=>{ websiteNote.classList.remove('redGlow') }, 2500);
    }

    return (
    <><input type="checkbox" id='sidebarSlider'/>
    <label htmlFor='sidebarSlider'>
    <div id='sidebarcontainer'>

      <div id='sidebar'>
        <nav id='sidebar-links'>
          <div className='sidebarLink'><a href='#content_intro' onClick={updateColor}><i className='fa fa-envelope'></i> Email</a></div>
          <div className='sidebarLink'><a href='#content_intro' onClick={updateColor}><i className='fab fa-github-square'></i> Github</a></div>
          <div className='sidebarLink'><a href='#content_intro' onClick={updateColor}><i className='fab fa-linkedin'></i> LinkedIn</a></div>
          <div className='sidebarLink'><a href='#content_intro' onClick={updateColor}><i className='fab fa-free-code-camp'></i> F.C.C.</a></div>
        </nav>

        <div id='sidebar-info'>
        <img className='logo-img' alt='React Logo' src={logo} />
          <p>Made with React</p>
        </div>

        </div>



      </div>


        </label></>

    );
  }
}
