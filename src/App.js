import './App.css';
import React from 'react';
import Profile from './Component/Profile/Profile';

function App() {

  const handleName =(fname)=>{
   
    alert(`hello world at iam ${fname}`)}
  return (
    <div className="App">
     <Profile  fullname="badr ali"  bio="Engenner" profession="mobile software " img="/imageInPublic.png" handlclick={handleName} />
    </div>
  );
}


export default App;
