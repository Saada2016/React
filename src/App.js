import React from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
// import MainContent from './component/MainContent';
// import Footer from './component/Footer';

function App() {
  return (
    <div className="App">   
      <Header/>
      <br/>
      <Footer/>
      
    </div>
  );
}

export default App;
