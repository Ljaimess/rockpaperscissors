import { React, useState, useEffect } from 'react';
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import './App.css';



const App = () => {

  // here the players choice, computers choice and results are being set as "nothing"(the null is doing this).
  // the "set"(players, comp and result) is being updated by handleClick as a "value" and pushed into the their corresponding variable container.
  let [playerChoice, setPlayerChoice] = useState(null);
  let [compChoice, setCompChoice] = useState(null);
  let [result, setResult] = useState(null);
  //the array that holds the values
  let options = ["rock", "paper", "scissors"];
  

  //handles the click and sets the playerChoice as the value that the player chooses
  let handleClick = (value) => {
    setPlayerChoice(value);
    computerGuess()

  };

  //the options is being randomized and being set as the CompChoice as the randomOption
  let computerGuess = () => {
    let randomOption = options[Math.floor(Math.random() * options.length)];
    setCompChoice(randomOption)
  };

  useEffect(() => {
    
      switch (playerChoice + compChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
          setResult('YOU WIN!')
          break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
          setResult('YOU LOSE!')
          break
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
          setResult('ITS A DRAW!')
          break
      }
    
  }, [compChoice, playerChoice])

  return (

    <div>
      <NavBar />

      <div className="jumbotron jumbotron-fluid header">
        {options.map((option, index) =>
          <button key={index} onClick={() => handleClick(option)}>
            {option}
          </button>
        )}
        <h2>You chose: {playerChoice}</h2>
        <h2>They chose: {compChoice}</h2>
        <h1>{result}</h1>
      </div>
      <Footer />
    </div>

  );
};

export default App;
