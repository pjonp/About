import React from 'react';
import Sidebar from './components/sidebar';
import Headerbar from './components/headerbar';
import ContentIntro from './components/content_intro';
import ContentCerts from './components/content_certs';
import ContentProjects from './components/content_projects';
import ContentExperience from './components/content_experience';

function App() {
  return (
    <div className='mainContainer'>
      <Headerbar />
      <Sidebar />
<content>
    <div className='contentContainer'>
      <ContentIntro />
      <ContentCerts />
      <ContentProjects />
      <ContentExperience />
    </div>
</content>
    </div>
  );
}

export default App;
