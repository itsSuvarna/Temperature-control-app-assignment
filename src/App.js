import React, {useState}from 'react';
import './App.css';


const App=()=>{
  const[temp,setTemp]=useState(0);
 const[colour,setColour]=useState('orange');

 const incre=()=>{
   const newTemp=temp+1
   newTemp>=15 ? setColour('orange'):setColour('blue')
   setTemp(newTemp)
 }
 const decre=()=>{
  const newTemp=temp-1
  newTemp>=15 ? setColour('orange'):setColour('blue')
  setTemp(newTemp)
}


  return(
   <div className='app-container'>
     <div className='display-container'>
      <div className={`temp-display ${colour}`} >{temp}C</div>
      <div className='btn-container'>
        <button onClick={incre}>+</button>
        <button onclick={decre}>-</button>

      </div>
     </div>
   </div>
  );
}
export default App