import { useState } from "react";
import ChooseLetters from "./components/ChooseLetters";
import "./App.css";
import Hangman from "./components/Hangman";
import RandomWord from "./components/RandomWord";
import StartingOverlay from "./components/StartingOverlay";
import UserMessage from "./components/UserMessage";
import Score from "./components/Score";
import CompletedGame from "./components/CompletedGame";
import AudioContainer from "./components/AudioContainer";

document.title = "Cozy Hangman";
let count = 0;

function App() {
  const randomWordsList = [
    "comfort",
    "calm",
    "relax",
    "coffee",
    "cozy",
    "cuddle",
    "easygoing",
    "rain",
  ];

  const [generatedWord, setGeneratedWord] = useState(randomWordsList[0]);

  const [generatedWordLetters, setGeneratedWordLetters] = useState(
    generatedWord.split("").map((letter) => {
      return { letter: letter.toUpperCase(), matched: false };
    })
  );

  const [resetedGame, setResetedGame] = useState(false);

  const [foundWord, setFoundWord] = useState(false);

  const [score, setScore] = useState(0);

  const [startedGame, setStartedGame] = useState(false);

  const [chosenLetterByUser, setChosenLetterByUser] = useState("");

  const [completedGame, setCompletedGame] = useState(false);

  const [falseTries, setFalseTries] = useState(0);

  /**
   * The function `choseLetter` takes a letter as an argument and sets the chosen letter by the user to
   * the letter that was passed in
   * @param letter - the letter that the user chose
   * @returns The letter that was chosen by the user.
   */
  function choseLetter(letter) {
    setChosenLetterByUser(letter);
    return letter;
  }

  /**
   * If the user has not lost the game, then choose a letter, check if it's a match, and if it is, mark
   * it as matched
   * @param letter - the letter that the user chose
   * @returns the letter that was chosen.
   */
  function choseLetterAndCheckForMatch(letter) {
    if (falseTries === 6) return;
    if (foundWord) return;

    const chosenLetter = choseLetter(letter);

    foundNoMatch(chosenLetter);

    generatedWordLetters.forEach((letter) => {
      if (letter.letter === chosenLetter.toUpperCase()) {
        letter.matched = true;
      }
    });

    foundAllLettersInTime();
  }

  /**
   * If the chosen letter is not in the generated word, add one to the false tries
   * @param chosenLetter - the letter that the user chose
   */
  function foundNoMatch(chosenLetter) {
    if (!generatedWord.toUpperCase().includes(chosenLetter.toUpperCase())) {
      setFalseTries((prev) => prev + 1);
    }
  }

  /**
   * If all the letters in the generated word have been matched, then set the foundWord state to true
   * and increment the score by 1
   */
  function foundAllLettersInTime() {
    const matchedLettersArray = generatedWordLetters.filter(
      (letter) => letter.matched
    );

    if (matchedLettersArray.length === generatedWordLetters.length) {
      setFoundWord((prev) => !prev);
      setScore((prev) => prev + 1);
    }
  }

  /**
   * The function resets the game by incrementing the counter, checking if the counter is equal to the
   * length of the array of words, setting the found word to false, setting the reseted game to true,
   * setting the generated word to the word at the index of the counter, setting the generated word
   * letters to the letters of the word at the index of the counter, and setting the false tries to 0
   */
  function resetGame() {
    count++

    if (count === randomWordsList.length) {
      setCompletedGame(true);
    }

    if (randomWordsList[count] === undefined) return


    setResetedGame((prev) => (prev === true ? false : null));
    setFoundWord((prev) => (prev === true ? false : null));

  

    setGeneratedWord(randomWordsList[count]);

    setGeneratedWordLetters(
      randomWordsList[count].split("").map((letter) => {
        return { letter: letter.toUpperCase(), matched: false };
      })
    );

    setFalseTries(0);
  }

  return (
    <div className="App">
      <UserMessage startedGame={startedGame} />
      {completedGame && <CompletedGame />}
      <Score score={score} />
      {!startedGame && <StartingOverlay setStartedGame={setStartedGame} />}
      <Hangman
        falseTries={falseTries}
        onReset={resetGame}
        foundWord={foundWord}
      />
      <RandomWord
        generatedWordLetters={generatedWordLetters}
        generatedWord={generatedWord}
      />
      <ChooseLetters onClick={choseLetterAndCheckForMatch} />
      <AudioContainer />
      <div className="footer">
        Art © Tony Holz @https://dribbble.com/tonyholz
      </div>
    </div>
  );
}

export default App;
