import React, { Component } from 'react'

export default class ContentExperience extends Component {
  render(){
    let logoData = [
      {name: 'GM', image: '/images/logos/logo_GM.png'},
      {name: 'Tesla', image: '/images/logos/logo_Tesla.png'},
      {name: 'Michigan State University', image: '/images/logos/logo_MSU.png'},
      {name: 'Nissan', image: '/images/logos/logo_Nissan.png'},
      {name: 'Honda', image: '/images/logos/logo_Honda.png'},
      {name: 'Boeing', image: '/images/logos/logo_Boeing.png'},
      {name: 'Jeep', image: '/images/logos/logo_Jeep.png'},
      {name: 'Dart', image: '/images/logos/logo_Dart.png'},
      {name: 'Ford', image: '/images/logos/logo_Ford.png'},
      {name: 'John Deere', image: '/images/logos/logo_JohnDeere.png'},
      {name: 'Club Car', image: '/images/logos/logo_ClubCar.png'},

    ]
    let logoList = logoData.map((d,i) => {
      return (
          <img className='logoImg' alt={d.name + 'Logo'} src={process.env.PUBLIC_URL + d.image} key={d.name+'logo'} />
 )
    })
    return(
      <div id='content_experience'>
        <h1>Experience</h1>
        <p>
         For the last ten years I've been grateful to work with more the 50+ companies creating solutions to their problems; both simple and complex.
        </p>
        <p>
        I'm ready for a new challenge.
        </p>
        <div id='logoContainer'>
          {logoList}
        </div>
      </div>
    );
  }
}
