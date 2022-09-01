import './RandomWord.css';

export default function RandomWord(props) {

  return (
    <div>
      <ul className="generated-word">
        {props.generatedWordLetters.map((letter, index) => {
          return (
            <li key={index} className={letter.matched === true ? "appear" : ""}>
              <div className={letter.matched === true ? "appear" : "not-shown"}>
                {letter.letter}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
