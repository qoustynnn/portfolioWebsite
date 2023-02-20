import React, { Component } from "react";

import Home from './components/HomeComponent';
import Footer from './components/FooterComponent';
import Portfolio from './components/PortfolioComponent';
import Header from './components/HeaderComponent';



class App extends Component {
  render() {
    return (
        <div className="Main">
          <Header/>
         <Home/>
         <Portfolio/>
         <Footer/>
        </div>
    );
  }
}

export default App;
