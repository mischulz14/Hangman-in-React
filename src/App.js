import { useState, useEffect } from "react";
import ChooseLetters from "./components/ChooseLetters";
import "./App.css";
import Hangman from "./components/Hangman";
import RandomWord from "./components/RandomWord";
import StartingOverlay from "./components/StartingOverlay";
import UserMessage from "./components/UserMessage";

function App() {
  const [numberInList, setNumberInList] = useState(0);
  console.log(numberInList);
  const randomWordsList = ["comfort", "calm", "relax", "coffee", "cozy"];
  const [generatedWord, setGeneratedWord] = useState(randomWordsList[0]);

  const [resetedGame, setResetedGame] = useState(false);

  const [foundWord, setFoundWord] = useState(false);

  const [score, setScore] = useState(0);

  const [startedGame, setStartedGame] = useState(false);

  const [chosenLetterByUser, setChosenLetterByUser] = useState("");

  const [generatedWordLetters, setGeneratedWordLetters] = useState(
    randomWordsList[numberInList].split("").map((letter) => {
      return { letter: letter.toUpperCase(), matched: false };
    })
  );

  const [falseTries, setFalseTries] = useState(0);

  function choseLetter(letter) {
    setChosenLetterByUser(letter);
    return letter;
  }

  function choseLetterAndCheckForMatch(letter) {
    if (falseTries === 6) return;

    const chosenLetter = choseLetter(letter);

    foundNoMatch(chosenLetter);

    generatedWordLetters.forEach((letter) => {
      if (letter.letter === chosenLetter.toUpperCase()) {
        letter.matched = true;
      }
    });

    foundAllLettersInTime();
  }

  function foundNoMatch(chosenLetter) {
    if (!generatedWord.toUpperCase().includes(chosenLetter.toUpperCase())) {
      setFalseTries((prev) => prev + 1);
    }
  }

  function foundAllLettersInTime() {
    const matchedLettersArray = generatedWordLetters.filter(
      (letter) => letter.matched
    );

    if (matchedLettersArray.length === generatedWordLetters.length) {
      console.log("you did it!");
      setFoundWord((prev) => !prev);
    }
  }

  function resetGame() {
    setResetedGame((prev) => (prev === true ? false : null));
    setFoundWord((prev) => (prev === true ? false : null));

    setNumberInList((prev) => prev + 1);

    setGeneratedWord(randomWordsList[numberInList]);

    setGeneratedWordLetters(
      generatedWord.split("").map((letter) => {
        return { letter: letter.toUpperCase(), matched: false };
      })
    );

    console.log(generatedWordLetters);

    setFalseTries(0);
  }

  return (
    <div className="App">
      <UserMessage />
      {!startedGame && <StartingOverlay setStartedGame={setStartedGame} />}
      <Hangman
        falseTries={falseTries}
        onReset={resetGame}
        foundWord={foundWord}
        numberInList={numberInList}
      />
      <RandomWord
        generatedWordLetters={generatedWordLetters}
        generatedWord={generatedWord}
        numberInList={numberInList}
      />
      <ChooseLetters onClick={choseLetterAndCheckForMatch} />
    </div>
  );
}

export default App;
