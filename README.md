# clone karva mate 

### `npx create-react-app my-app`



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.




#app.jsx

import { useState } from 'react'

import './App.css'
import Alert from './Componeat/Alert'
import Regiser from './Componeat/Regiser'
import Navbar from './Componeat/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={
            <>
              <h1>hello shyam</h1>
              <p>Welcome to the Home Page!</p>
            </>
          } />
          <Route path="/register" element={<Regiser />} />
          <Route path="/alert" element={<Alert />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App







#pachhi ael folder banvje Componeat aa name nuj hoo pachi aema 3 file  1 Navbar.jsx  2 Alert.jsx 3 Regiser.jsx



# Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0', display: 'flex', gap: '15px', marginBottom: '20px' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Home</Link>
      <Link to="/register" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Register</Link>
      <Link to="/alert" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Alert</Link>
    </nav>
  );
}

export default Navbar;





# Alert.jsx


import React,{useState} from "react";

function Alert() {
  const [user , setUser] = useState()
  const [email, setEmail] = useState()
    function registerHandler(event){
      
  
      event.preventDefault();
      console.log("regist");
      alert(`heloo ${user} your email is ${email}`)
  
    }
  

  return (
   <div>
      <h1>Register Component</h1>
      <form onSubmit={registerHandler}>
        <div>
          <label>Name: </label>
          <input value={user || ''} onChange={(e)=>setUser(e.target.value)} type="text" placeholder="Enter name" />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <input value={email || ''} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </div>
        <br />
        <button type="submit">Register</button>
      </form>

    
    </div>
  )
}

export default Alert






# Regiser.jsx

import React, { useState } from "react";

function Regiser() {
const [user , setUser] = useState()
const [email, setEmail] = useState()
  function registerHandler(event){
    

    event.preventDefault();
    console.log("regist");

    
  }
  return (
    <div>
      <h1>Register Component</h1>
      <form onSubmit={registerHandler}>
        <div>
          <label>Name: </label>
          <input value={user || ''} onChange={(e)=>setUser(e.target.value)} type="text" placeholder="Enter name" />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <input value={email || ''} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </div>
        <br />
        <button type="submit">Register</button>
      </form>

    <h3>user {user}</h3>
    <h3>email {email}</h3>
    </div>

  );
}

export default Regiser;





# main.jsx



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



