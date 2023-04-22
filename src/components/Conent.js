import React from 'react';
// import Navigation from "./components/Navigation";
import AboutMe from "./pages/AboutMe"
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
// import Navigation from "./Navigation"

function Content({currentPage}){
    // const [currentPage, setCurrentPage] = useState('Aboutme');

    const renderPage = () => {
        if (currentPage === 'Aboutme') {
          return <AboutMe />
        }
        if (currentPage === 'Project') {
          return <Project />
        }
        if (currentPage === 'Contact') {
          return <Contact />
        }
        return <Resume />
      };

      // const handlePageChange = (page) => setCurrentPage(page);

      return(
        <div>
            {/* <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/> */}
            {renderPage()}
        </div>
        
      )
}

export default Content;

