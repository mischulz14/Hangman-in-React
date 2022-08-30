import letters from "../data/Letters";
import "./ChooseLetters.css"

export default function ChooseLetters(props){

    

    return (
      <>
      <div className="letters-container">

        <ul className="choose">
          {letters.map((letter, index) => {
            return <li onClick={() => props.onClick(letter)} key={index}>{letter}</li>;
          })}
        </ul>
        
        </div>
      </>
    );
}