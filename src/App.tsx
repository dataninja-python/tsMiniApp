// import React components
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// import Pages
import Landing from './pages/Landing'

// import styling
import './styles/css/normalize.css'
import './styles/css/skeleton.css'
import './styles/css/App.css'

let name: string
let age: number
let isStudent: boolean
let hobbies: string[]
let role: [number, string]

role = [5, "five"]

type Person = {
  name: string,
  age?: number,
}

let person: Person = {
  name: "AJ",
  age: 22,
}

function App() {
  return (
    <>
      <div className="container">
        <Landing />
      </div>
    </>
  );
}

export default App;
