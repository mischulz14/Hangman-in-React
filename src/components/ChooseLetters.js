import './ChooseLetters.css';
import letters from '../data/Letters';

export default function ChooseLetters(props) {
  return (
    <>
      <div className="letters-container">
        <ul className="choose">
          {letters.map((letter, index) => {
            return (
              <li
                className="letter"
                onClick={(event) => {
                  props.onClick(letter);
                  event.target.classList.add('matched');
                }}
                key={index}
              >
                {letter}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
