import React from 'react';
import resumePDF from '../resume/resume.pdf';

function Resume() {
  const proficiencies = [
    'JavaScript',
    'React',
    'Node.js',
    'CSS',
    'HTML',
    'Bootstrap',
    'Node JS',
    'MySQL',
    'MongoDB'
    // add more proficiencies as desired
  ];

  return (
    <div className='p-5'>
      <h1 className='page-tab-font' >Resume</h1>
      <p>Download my resume:</p>
      <a href={resumePDF} download>Download Resume</a>
      <h2>Proficiencies</h2>
      <ul>
        {proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </div>
  );
}


export default Resume