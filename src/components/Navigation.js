import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
      <ul className="nav justify-content-end nav-tabs nav-font-background">
        <li className="nav-item">
          <a
            href="#aboutme"
            onClick={() => handlePageChange('Aboutme')}

            className={currentPage === 'Aboutme' ? 'nav-link active p-1 nav-font-family' : 'nav-link p-1 nav-font-family'}
          >
          <span className='nav-font tab-padding'>
            About me
          </span>
            
          </a>
        </li>
        <li className="nav-item">
          <a 
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active p-1 nav-font-family' : 'nav-link p-1 nav-font-family'}
          >
          <span className='nav-font tab-padding'>
            Portfolio
          </span>
            
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active p-1 nav-font-family' : 'nav-link p-1 nav-font-family'}
          >
          <span className='nav-font tab-padding'>
            Contact
          </span>
            
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active p-1 nav-font-family' : 'nav-link p-1 nav-font-family'}
          >
          <span className='nav-font tab-padding'>
            Resume 
          </span>
            
          </a>
        </li>
      </ul>
    );
  }
  
  export default Navigation;