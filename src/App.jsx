import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterComponent from './CounterComponent';

const Hello = (props) => {

  if (props.username == undefined) {
    return <p>Hello</p>
  }
  return (
    <div className='paleblue'>
      <h1>Hello!, {props.username}</h1>
    </div>
  );
}

function Goodbye () {
  return (
    <div className='palegray'>
      <h2>Bye, bye</h2>
    </div>

  )
}

function App() {
  let city ="Seoul"

  const onGreet = () => {
    alert("안녕하세요")
  };

  return (
    <div>
      <Hello username={city}/>
      <Hello username="Annie"/>
      <Goodbye/>
      <button onClick={onGreet}>Greeting</button>
      <CounterComponent/>
    </div>
  );
  
}

export default App
