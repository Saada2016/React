import React from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import About from './component/About';
import Work from './component/Work';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">   
      <Header/>
      <About/>
      <br/>
      <Work/>
      <br/>
      <Footer/>
      
    </div>
  );
}

export default App;
