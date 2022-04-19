import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert"
import React from "react";
import {
  BrowserRouter ,
  Route,
  Routes,
  
} from "react-router-dom";

function App(props) {
  const [Mode, setMode] = useState('light');

  const toggleMode =()=>{
    if (Mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor = '#162430';
      showAlert('Dark Mode Succssfuly Enabled','success');
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('light Mode Succssfuly Enabled','success')
    }
  }
  
   const [alert, setAlert] = useState(null);
   const showAlert = (message, type)=>{
     setAlert({
       msg : message,
       type : type
     }
     )
     setTimeout(() => {
       setAlert(null)
     }, 1500);
   }

   return (

  <div>
    

<div className="container my-3">
 {/* <Textform showAlert = {showAlert} Mode={Mode} heading = ' Enter the text to analyze'/> */}
 {/* <About/> */}
  <Alert Alert={alert} />

 <BrowserRouter>
 <Navbar Mode={Mode}  toggleMode={toggleMode} title =  'Words Counter' />
    <Routes>
      <Route exact path="/" element={<Textform showAlert = {showAlert} Mode={Mode} heading = ' Enter the text to analyze'/>} />
      <Route exact path="/about" element={<About/>} />
      
    </Routes>
  </BrowserRouter>


  </div>

    
    </div>
  );
  }

export default App;
