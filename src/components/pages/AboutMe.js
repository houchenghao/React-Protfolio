import React from 'react';

export default function Aboutme() {
  return (
    <div className='p-0 about-me-container'>
      <div className='p-5'>
        <h1 className='page-tab-font'>About me</h1>
        <div className='about-me-font'>
          <div className='pb-0'>
            <p>
              Welcome to my portfolio! My name is Chenghao, and I'm an aspiring full stack developer,
              currently in the process of completing a Monash bootcamp.
            </p>
            <p> 
              While I may be new to the field, I'm passionate about codeing, and I'm excited to begin my journey as a professional developer. 
              Through my bootcamp studies, I've gained foundational knowledge to become a developer , and I'm eager to continue growing my skills and gaining experience in the field.
            </p>
            <p>
              While I don't yet have extensive professional experience, I've worked on several projects during my bootcamp studies, 
              including Weather-Dashboard, Work-Day-Scheduler, Tech-blog... These projects have allowed me to gain practical experience and have helped me develop my problem-solving skills.
            </p>
          </div>
        </div>
      </div>
      
        
      <div className='about-me-background-container'>
        <figure 
            className="about-me-background">
        </figure>
      </div>      
    </div>
  );
}