import React from 'react';
import './Project.css'
// import project1B from '../images/project1B.jpg'
// import project1D from '../images/project1D.jpg'

const Project1handleClick = () => {
    window.location.href = 'https://swaplogs2.herokuapp.com/';
};

const Project2handleClick = () => {
    window.location.href = 'https://houchenghao.github.io/Weather-Dashboard/';
};

const Project3handleClick = () => {
    window.location.href = 'https://boiling-mesa-85577.herokuapp.com/';
};

const Project4handleClick = () => {
    window.location.href = 'https://rocky-reef-13818.herokuapp.com/';
};

const Project5handleClick = () => {
    window.location.href = 'https://houchenghao.github.io/Work-Day-Scheduler/';
};

const Project6handleClick = () => {
    window.location.href = 'https://stark-wildwood-15677.herokuapp.com/login';
};

function Project() {
    return (
      <div>
        <h1>Project</h1>
        <div className='project-container'>
            <figure 
                className="project-image-title project-image-1"
                onClick={Project1handleClick}
                style = {{cursor:'pointer'}}>
                <h4 className='project-title'>Swaplogs</h4>
            </figure>
        </div>

        <div className='project-container'>
            <figure 
                className="project-image-title project-image-2"
                onClick={Project2handleClick}
                style = {{cursor:'pointer'}}>
                <h4 className='project-title'>Weather Dashboard</h4>
            </figure>
        </div>

        <div className='project-container'>
            <figure 
                className="project-image-title project-image-3"
                onClick={Project3handleClick}
                style = {{cursor:'pointer'}}>
                <h4 className='project-title'>Note Taker</h4>
            </figure>
        </div>
        
        <div className='project-container'>
            <figure 
                className="project-image-title project-image-4"
                onClick={Project4handleClick}
                style = {{cursor:'pointer'}}>
                <h4 className='project-title'>PWA Text Editor</h4>
            </figure>
        </div>

        <div className='project-container'>
            <figure 
                className="project-image-title project-image-5"
                onClick={Project5handleClick}
                style = {{cursor:'pointer'}}>
                <h4 className='project-title'>Work Day Scheduler</h4>
            </figure>
        </div>

        <div className='project-container'>
            <figure 
                className="project-image-title project-image-6"
                onClick={Project6handleClick}
                style = {{cursor:'pointer'}}>
                <h4 className='project-title'>Tech Blog</h4>
            </figure>
        </div>
      </div>

      
    );
  }

export default Project