import React, { Component } from 'react'

export default class ContentProjects extends Component {
  render(){
    let projectData = [
  //    {name: 'Personal Portfolio Webpage', image: '/images/projects/project_personalSite.png', link: 'https://codepen.io/pjonp/pen/NWWxxEL', tools: [['HTML5','html5'], ['CSS3','css3']]},
      {name: 'Random Quote Machine', image: '/images/projects/project_randomQuotes.png', link: 'https://codepen.io/pjonp/pen/VwwayjZ', tools: [['HTML5','html5'], ['CSS3','css3'], ['JS','js'], ['JSON','database']]},
      {name: 'Javascript Calculator', image: '/images/projects/project_calculator.png', link: 'https://codepen.io/pjonp/pen/jOOMGqz', tools: [['CSS3','css3'], ['JS','js'], ['REACT','react']]},
      {name: 'Markdown Previewer', image: '/images/projects/project_markdown.png', link: 'https://codepen.io/pjonp/pen/yLLajgb', tools: [['CSS3','css3'], ['JS','js'], ['REACT','react']]},
      {name: 'Pomodoro Clock', image: '/images/projects/project_pomodoroClock.png', link: 'https://codepen.io/pjonp/pen/OJJbVLR', tools: [['CSS3','css3'], ['JS','js'], ['REACT','react']]},
      {name: 'D3 Bar Chart', image: '/images/projects/project_d3Bar.png', link: 'https://codepen.io/pjonp/pen/zYYNPVB', tools: [['CSS3','css3'], ['JS','js'], ['D3.js','project-diagram'], ['JSON','database']]},
      {name: 'D3 Heat Map', image: '/images/projects/project_d3Heatmap.png', link: 'https://codepen.io/pjonp/pen/abbJxKW', tools: [['CSS3','css3'], ['JS','js'], ['D3.js','project-diagram'], ['JSON','database']]},
      {name: 'D3 Choropleth Map', image: '/images/projects/project_d3Choropleth.png', link: 'https://codepen.io/pjonp/pen/ZEEKrgr', tools: [['CSS3','css3'], ['JS','js'], ['D3.js','project-diagram'], ['JSON','database']]},
    //  {name: 'Timestamp Microservice', image: '/images/Untitled.png', link: 'https://fcc1-pjonp.glitch.me', tools: [['JS','js'],['NODEjs','node']]},
      {name: 'Unit Converter', image: '/images/projects/project_unitConverter.png', link: 'https://fcc6-pjonp.glitch.me/', tools: [['HTML5','html5'], ['JS','js'], ['EXPRESS','node']]},
      {name: 'Exercise Tracker', image: '/images/projects/project_exerciseTracker.png', link: 'https://fcc4-pjonp.glitch.me/', tools: [['HTML5','html5'], ['JS','js'], ['EXPRESS','node'], ['MongoDB','database'] ]},
      {name: 'Personal Library', image: '/images/projects/project_personalLibrary.png', link: 'https://fcc8-pjonp.glitch.me/', tools: [['HTML5','html5'], ['JS','js'], ['EXPRESS','node'], ['MongoDB','database'] ]},
      {name: 'Message Board', image: '/images/projects/project_messageBoard.png', link: 'https://fcc10-jonp.glitch.me/', tools: [['HTML5','html5'], ['JS','js'], ['EXPRESS','node'], ['MongoDB','database'] ]},
      {name: 'Issue Tracker', image: '/images/projects/project_issueTracker.png', link: 'https://fcc7-pjonp.glitch.me/', tools: [['HTML5','html5'], ['JS','js'], ['EXPRESS','node'], ['MongoDB','database'] ]},


    ]
    let projectList = projectData.map((d) => {
      let projectIcons = d.tools.map( (i) => {
        let j
        i[1] === 'database' || i[1] === 'project-diagram' ? j = '' : j = 'b'
        return(
          <div className='projectIcon' key={i[0]}><i className={'fa'+j+' fa-'+i[1]+' fa-2x'} /><p className='projectIconName'>{i[0]}</p></div>
        )
      });
      return ( <a className='projectItem' href={d.link} rel='noreferrer noopener' target='_blank' key={d.name+'project'}>
          <img className='projectImg' alt={d.name + 'Project'} src={process.env.PUBLIC_URL + d.image} />
          <div className='projectIconsList'>{projectIcons}</div>
          <p className='projectText'>{d.name}</p>
          </a> )
    });
    return(
      <div id='content_projects'>
        <h1>Projects</h1>
        <div id='projectContainer'>
          {projectList}
        </div>
      </div>
    );
  }
}
