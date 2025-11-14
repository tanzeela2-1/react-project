import { useState ,useEffect } from 'react';

import './App.css'

function App() {
const [time, setTime] = useState(new Date());
 

useEffect(() => {
    const timer = setInterval(() =>
 setTime(new Date()), 1000);
   
    return () => clearInterval(timer); // Cleanup
  }, []);


    const hours = time.getHours();  // return the current hour (0–23)
  let greeting = '';

  if (hours < 12) {
    greeting = '☀️ Good Morning';
  } else if (hours < 18) {
    greeting = '🌤️ Good Afternoon';
  } else {
    greeting = '🌙 Good Evening';
  }

  return (
    <>
    <div className='clock-container'>
     <h1>Digital Clock  </h1>
        <h1>{greeting}</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
 
    </>
  )
}

export default App
