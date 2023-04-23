import React from 'react';
import Navigation from './Navigation'

 function Header({currentPage,handlePageChange}) {
  return (
    <div className='pt-3 '>
      <h2 className='name-font'>Chenghao HOU</h2>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>

    </div>
  );
}

export default Header;