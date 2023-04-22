import React from 'react';
import Navigation from './Navigation'

 function Header({currentPage,handlePageChange}) {
  return (
    <div className='pt-3 px-sm-1 px-lg-3'>
      <h1>Chenghao</h1>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>

    </div>
  );
}

export default Header;