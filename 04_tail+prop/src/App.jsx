import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  let myObj={
    username:"hitesh",
    age: 21
  }

  let newArr=[1,2,3]

  return (
    <>
      <h1 className="bg-green-400 test-black p-4 rounded-xl">Tailwind test</h1>
      <Card username="Chai" btnText="click me"/>
      <Card username="Abhinav" btnText="visit me"/>
    </>
  )
}

export default App
