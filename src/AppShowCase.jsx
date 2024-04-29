//import React from 'react'

function App() {
const name = 'Lucy';
const names = ['Lucy', 'Brad', 'Frederika'];
const loggedIn = true;

  return (
    <>
    <div className="text-5xl">App</div>
    <p>Hello {name}</p>
    <ul>
      <li>hi</li>
      {names.map((name, index) => {
        <li key={index}>{name}</li>
      })}
    </ul>
    {/* {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>} */}
    {loggedIn && <h1>Hello Member</h1>}
    </>
  )
}

export default App
