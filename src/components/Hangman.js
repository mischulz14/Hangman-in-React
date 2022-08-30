import "./Hangman.css"

export default function Hangman({ falseTries, onReset, numberInList , foundWord}) {

  return (
    <>
      <div className="hangman">
        {falseTries >= 1 && <div className="star star-1"></div>}

        {falseTries >= 2 && <div className="star star-2"></div>}

        {falseTries >= 3 && <div className="star star-3"></div>}

        {falseTries >= 4 && <div className="star star-4"></div>}

        {falseTries >= 5 && <div className="star star-5"></div>}

        {falseTries >= 6 && <div className="star star-6"></div>}

        {falseTries === 6 && (
          <>
            <div className="game-over">
              <span>Oh no...</span>
              <button onClick={onReset}>Try again?</button>
            </div>
          </>
        )}

        {foundWord && (
          <>
            <div className="game-over">
              <span>You did it!</span>
              <button onClick={onReset}>Another word?</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}