import React from 'react';
import './styles/css/App.css';

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
    <div className="App">
      <header className="App-header">
        <p>Hi</p>
      </header>
    </div>
  );
}

export default App;
