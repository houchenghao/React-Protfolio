import React from 'react';
import './Footer.css'
import gitHubImage from './images/github.png'
import linkInImage from './images/linkin.png'


const gibHubhandleClick = () => {
    window.location.href = 'https://github.com/houchenghao';
};

const linkinhandleClick = () => {
    window.location.href = 'https://www.linkedin.com/in/chenghao-hou-7946b758/';
}

export default function Footer() {
  return (
    <div className='footer'>
        <div>   
            <img className='image'
                src = {gitHubImage}
                alt = 'Github'
                onClick= {gibHubhandleClick}
                style = {{cursor: 'pointer'}}
            />
        </div>
        <div>
            <img className='image'
                src = {linkInImage}
                alt = 'Github'
                onClick= {linkinhandleClick}
                style = {{cursor: 'pointer'}}
            />
        </div>
    </div>

  );
}

