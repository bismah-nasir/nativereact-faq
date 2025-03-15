import React, { Component } from "react";
import Header from "./components/Header";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <div className="w-[90%] sm:w-[600px] bg-white rounded-2xl px-10 pt-10 pb-3 mx-auto">
          <Header />
          <Questions />
        </div>
        
        <div className="w-[90%] mx-auto mb-[10px]">
          <Footer />
        </div>
        
      </>
    );
  }
}

export default App;
