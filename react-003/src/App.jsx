// import { useState } from 'react'
const data = [
  'Import useState :Bring in the useState hook from React.',
'Declare the State Variable: Create a state variable and its updater function.',
'Use and Update the State: Access the state in JSX and update it with the setter.',
];

 export function App() {
 

  return (
    <>
    <div className="container">
    <div className="steps">
        <p className="step">1</p>
        <p className="step">2</p>
        <p className="step">3</p>
    </div>
    <div>
        <p className="text-content">Steps: this is first state change.</p>
    </div>
    <div  className="btn">
      <button className="prev">Previous</button>
      <button className="next">Next</button>
    </div>
 </div>

      </>
  )
}


