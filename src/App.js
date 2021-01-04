import './App.css';
import React, { Component } from 'react';


class App extends Component  {
 state={
  fullname:"badr ali",
  profession:"mobile software ",
  bio:"Engenner",
  img:"/imageInPublic.png",
  x: false

 }
 handleshow =()=>{
this.setState({x:true})
console.log(this.state.x)
 }
 showresult =()=>{
   if(this.state.x===true){
     return(
      console.log(this.state.fullname)
      
     )
   }
 }

render(){
  return (
    <div className="App">
      
    <button onClick={this.handleshow}>click</button>
    {this.showresult}   
    
    
    </div>
  );
}}


export default App;
