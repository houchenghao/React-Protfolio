import React, { useState } from "react";
// import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Conent";


import './APP.css'

function App() {
  const [currentPage, setCurrentPage] = useState('Aboutme');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="back-ground-color">
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <Content currentPage={currentPage}/>
      <Footer />
    </div>
  );
}

export default App;