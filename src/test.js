import './App.css';
import { useEffect, useState } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import React from 'react';

const App = () => {

    // here the players choice, computers choice and results are being set as "nothing"(the null is doing this).
    // the "set"(players, comp and result) is being updated by handleClick as a "value" and pushed into the their corresponding variable container.
    let [playerChoice, setPlayerChoice] = useState(null);
    let [compChoice, setCompChoice] = useState(null);
    let [result, setResult] = useState(null);
    // the array that holds the values
    let options = ["rock", "paper", "scissors"]

    //
    let handleClick = (value) => {
        setPlayerChoice(value)

    };

    let theCompsGuess = () => {
        let randomChoice = options[Math.floor(Math.random() * options.length)]
        setCompChoice(randomChoice)
    }

    // let showResult = () => {
    //   switch (playerChoice + compChoice) {
    //     case "scissorspaper":
    //     case "rockscissors":
    //     case "paperrock":
    //       setResult("YOU WON!")
    //       break
    //     case "paperscissors":
    //     case "scissorsrock":
    //     case "rockpaper":
    //       setResult("YOU LOSE")
    //       break
    //     case "rockrock":
    //     case "paperpaper":
    //     case "scissorsscissors":
    //       setResult("It'S A DRAW!")

    //   }
    // }



    return (
        <div>
            <NavBar></NavBar>

            <h2>You chose: {playerChoice} </h2>
            <h2></h2>
            <button onClick={() => handleClick("rock")}>Rock</button>
            <button onClick={() => handleClick("paper")}>Paper</button>
            <button onClick={() => handleClick("scissor")}>Scissor</button>

            <Footer></Footer>
        </div>
    );

};

export default App;







const App = () => {

    // here the players choice, computers choice and results are being set as "nothing"(the null is doing this).
    // the "set"(players, comp and result) is being updated by handleClick as a "value" and pushed into the their corresponding variable container.
    let [playerChoice, setPlayerChoice] = useState(null);
    let [compChoice, setCompChoice] = useState(null);
    let [result, setResult] = useState(null);
    //the array that holds the values
    let options = ["rock", "paper", "scissor"];

    //---Here the computers choice is being ranbomized
    let computerGuess = () => {

        let randomOption = options[Math.floor(Math.random() * options)];
        let compGuess = compsGuess(randomOption)



    };


    // test1 = () => { 
    //   console.log("test1")
    // };

    //---Three buttons calling in the user guess of "R P S" along with the computer  
    let rockButton = () => {
        console.log("rock button")

        computerChoice()
        console.log(compGuess + " compguess")
    };

    let paperButton = (event) => {
        console.log("paper button")

        computerChoice()
        console.log(computerChoice() + " compguess")

    };

    let scissorButton = (event) => {
        console.log("scissor button")

        computerChoice()
        console.log(computerChoice() + " compguess")

    };



    // const test4 = "test4"
    // possible guesses for the computer
    // state = {
    //   computerGuess: ""
    // }

    // handleKeyPress = (event) => {
    //    if (event.key === "r"){
    //     console.log('enter press here! ')
    // }
    // }

    // makes the button press 
    // document.onKeyDown = function (event) {
    //   var computerChoices = ["r", "p", "s"];
    //   var playerGuess = event.key;
    //   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //   if (playerGuess === computerGuess) {
    //     alert("you win")
    //   }
    //   else {
    //     alert("you lose")
    //   };

    //   console.log(playerGuess + "player");
    //   console.log(computerGuess + "computer");




    // };



    // let test3 = "test3"

    return (

        <React.Fragment>
            <NavBar></NavBar>

            <button onClick={rockButton}>Rock</button>
            <button onClick={paperButton}>Paper</button>
            <button onClick={scissorButton}>Scissor</button>
            {/* + console.log(this.state.userButtonPress + " state") */}
            {/* {this.test1()}
        { console.log("test2") }

        { console.log(test3) } 
        
        {this.state.test} */}
            {/* {console.log(this.state.userButtonPress + " state")} */}

            <Footer></Footer>
        </React.Fragment >

    );

};

export default App;
