import React from 'react';
import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function Content({currentPage}){

    const renderPage = () => {
        if (currentPage === 'Aboutme') {
          return <AboutMe />
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />
        }
        if (currentPage === 'Contact') {
          return <Contact />
        }
        return <Resume />
      };

      return(
        <div>
            {renderPage()}
        </div>
        
      )
}

export default Content;

