import React, { useState } from "react";
// import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortfolioContainer from "./components/PortfolioContainer";



function App() {
  const [currentPage, setCurrentPage] = useState('Aboutme');

  const handlePageChange = (page) => setCurrentPage(page);



  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <PortfolioContainer currentPage={currentPage}/>
      <Footer />
    </div>
  );
}

export default App;