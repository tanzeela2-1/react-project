import { useState } from "react";
export default function DataCounterReducer(){


const [date, setDate] = useState(new Date());
const [count, setCount] = useState(0);
const [step, setStep]= useState(1);

//   new Date().setDate()
//   new Date().getDate()

function handleDecrement(){
   
    setDate((prev) => {
        const prevDate = new Date(prev)
        prevDate.setDate( prevDate.getDate() - step);
        return prevDate;
    });
 setCount((prev) => prev - step);
}

function handleIncrement(){
   
    setDate((prev) => {
        const nextDate = new Date(prev)
        nextDate.setDate( nextDate.getDate() + step );
        return nextDate;
    });
     setCount((prev) => prev + step);
}
function handleReset(){
    setCount(0);
    setDate(new Date());

}

return(
   <div> 
    <h3>Date Increment / Date Decrement</h3>
    <p>current Date: {date.toDateString()}</p>
    <p>Count: {count}</p>
    <p>
        <label>
            step(days):
            <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            />
        </label>
    </p>
    <div>
    <button onClick={handleDecrement}>Previous Day</button>
    <button onClick={handleIncrement}>Next Day</button>
    <button onClick={handleReset}>Reset</button>
    </div>
  </div>
);
}
