/*function Button (props){
  return <button>{props.text}</button>
}

export default function App(props){
  return (
    <>
      <Button text='Click'/>
      <Button text='Send'/>
      <Button text='Cancel'/>
    </>
  )
}*/

import { useState } from "react";

export default function App(){
  let counter = 0;

  const [copyCounter, setCopyCounter ] = useState(counter)
  useState(count)

  function count(){
    setCopyCounter(copyCounter + 1 ) 
    console.log(counter);
  }

  return(
    <>
    <span>{copyCounter}</span>
    <button onClick={count}>+</button>
    </>
  )
}