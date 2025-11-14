import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const movies = [
    {
      title: "Inception",
      year: 2010,
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw&s=10",
    },
    {
      title: "The Godfather",
      year: 1972,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg",
    },
     {
    title: 'The Shawshank Redemption',
    year: 1994,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
 },
  ];

  // 1️⃣ State for current movie
  const [currentMovie, setCurrentMovie] = useState(null);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [hasGuessed, setHasGuessed] = useState(false); // 👈 track if user guessed

  // 2️⃣ Pick a random movie when component mounts
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    setCurrentMovie(movies[randomIndex]);
  }, []);

  const handleGuess = () => {
    if (!currentMovie) return;

    if (Number(guess) === currentMovie.year) {
      setMessage(`✅ Correct! ${currentMovie.title} was released in ${currentMovie.year}.`);
       setHasGuessed(true); 
    } else {
      setMessage("❌ Try again!");
    }
       
  };

 
 const handleNext = () => {
    if (!hasGuessed) {
      setMessage("⚠️ Please complete the first!");
      return;
    }
  const randomIndex = Math.floor(Math.random() * movies.length);
  setCurrentMovie(movies[randomIndex]);
  setGuess("");
  setMessage("");
   setHasGuessed(false); // reset for next round
};
 if (!currentMovie) return <p>Loading...</p>; // wait for random movie
  return (
    <div className="card-container">
      <h1>{currentMovie.title}</h1>
      <img src={currentMovie.poster} alt={currentMovie.title} width="300" />
      {message && <p>{message}</p>}
      <input
        type="number"
        placeholder="Enter release year"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <div className="btn-container">
      <div><button onClick={handleGuess}>Guess</button></div>
      <div><button onClick={handleNext}>Next</button></div>
     </div>
      
    </div>
  );

}

export default App;
