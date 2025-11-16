import { useReducer} from "react";
const initialState = {
    count: 0,
    date : new Date(),
    step:1,
}
function reducer(state, action) {
    switch(action.type){
    case 'DECREMENT':{
    const prevDate = new Date(state.date)
    prevDate.setDate( prevDate.getDate() - state.step);
    return{ ...state, date: prevDate, count:state.count - state.step};
   }
    case 'INCREMENT':{
     const nextDate = new Date(state.date)
     nextDate.setDate(nextDate.getDate() + state.step);
      return{ ...state, date: nextDate, count: state.count + state.step};
}
case 'SET _STEP':{
    return{...state, step: action.payload};
}
 case 'RESET':{
    return initialState;
}
    default:
        return state;
   }
}



export default function DataCounterReducer(){
const [state, dispatch] = useReducer(reducer , initialState);

// const [date, setDate] = useState(new Date());
// const [count, setCount] = useState(0);
// const [step, setStep]= useState(1);

//   new Date().setDate()
//   new Date().getDate()

// function handleDecrement(){
// dispatch({
//     type :'DECREMENT',
//     payload : 'step',
//  });
// }

// function handleIncrement(){
//  dispatch({
//         type: 'INCREMENT',
//         payload:'step',
//      });
// }
// function handleReset(){
//    dispatch({
//      type: 'RESET',
//    payload:'step',
//    });

// }

return(
   <div> 
    <h3>Date Increment / Date Decrement</h3>
    <p>current Date: {state.date.toDateString()}</p>
    <p>Count: {state.count}</p>
    <p>
        <label>
            step(days):
            <input
            type="number"
            value={state.step}
              onChange={(e) =>
              dispatch({ type: "SET_STEP", payload: Number(e.target.value) })
              }
            />
        </label>
    </p>
    <div>
    <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Previous Day
        </button>
 <button onClick={() => dispatch({type: 'INCREMENT'})}>
    Next day
 </button>
    <button onClick={() => dispatch({type: 'RESET'})}>
        Reset
        </button>
    </div>
  </div>
);
}
