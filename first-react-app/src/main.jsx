/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
function Header(){
  return(
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Resources</li>
      </ul>
    </nav>
  );
}
 function First(){
  return(
    <div className="first">
    <h1>welcome</h1>
   
    </div>
  )
}
 function Recipy({recipyName,ingredeints}){
  return(
    <>
    <h1 style ={{
      color:"blue",
      fontSize:"20px",
      display:"block"
    }}>{recipyName}</h1>
    <p>{ingredeints}</p>
    </>
  )
 }
 function Mypage(){
  return(
    <div>
      <h2 style={{
        fontSize: "30px",
        color:"green"
      }}>container</h2>
      <div style={{
        width:'200px',
        height:'200px',
        backgroundColor:'blue'
      }}></div>
    </div>
  )

 }
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <First/>
   <Recipy recipyName="pizza" ingredeints="base,tomato,flour,Mushrooms,Bell peppers"/>
  <Recipy recipyName="burger" ingredeints="bun"/>
  <Recipy recipyName="chilli chicken" ingredeints="chicken,carrots"/>
   <Mypage/>
   <Header/>
   
  </StrictMode>,
)
