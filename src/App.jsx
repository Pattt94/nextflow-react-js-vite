import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let city ="Seoul"

  return (
    <div>
      <h1 id="header" className='paleblue'>Hello, {city} :)</h1>
    </div>
  );
  
}

export default App
