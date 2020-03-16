import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import InfoOrder from "./components/InfoOrder/InfoOrder";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <InfoOrder/>
        <Footer/>
    </div>
  );
}

export default App;
