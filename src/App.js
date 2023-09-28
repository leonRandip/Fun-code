import React, { useState } from "react";
export default function Counter(){
    
  const [word,setWord]=useState("a");       
  
const toggleFact=()=>{
  setWord((currentWord) => (currentWord=='a' ? 'The' :"a"));
};

  return(
      <button onClick={toggleFact}>
          Vina is {word} Gay
      </button>
  );  
}
function App() {
  let vina=false;
  return (
    <>
    <Counter></Counter>
    </>
    
  );
}


