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

/*import { useState } from "react";

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
}*/


/*export default function App (){
  const aluno ={
    id:1,
    nome: 'Alex Bessa',
    curso: 'Desenvolvimento Web Full Stack',
    estado: 'ativo'
  }

  return (
    <>
      {aluno.estado &&(
        `O aluno ${aluno.nome} está ${aluno.estado}.`
      )}
    </>
  )
}*/

function NewFact(props){
  return (
    <>
    <p>{props.text}</p>
    <a href={props.source}>Fonte</a>
    </>
  );
}


import type { Fact } from "./types"

export default function App(){
  const facts: Fact[] = [
    {
      id: 1,
      text: 'Digital College é nomeada a melhor escola de tecnológia de Fortaleza.',
      source: 'https://opovo.com',
      category: 'tecnologia',
      votes_interesting: 2,
      votes_minblowing: 0,
      votes_false:5,
      create_at: '2026-05-07 19:35:03 GMT-3'
    },

    {
      id: 2,
      text: 'Neymar aplica golde em filho de detendo.',
      source: 'https://g1.com',
      category: 'esportes',
      votes_interesting: 5,
      votes_minblowing: 13,
      votes_false:2,
      create_at: '2026-05-07 13:32:03 GMT-3'
    }
  ];


  return (
    <>
      {
        {facts.map((fact) => {
          return <NewFact text={fact.text} source={fact.source}/>

        })}
      }
    </>
  )
}