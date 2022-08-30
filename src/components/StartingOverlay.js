import "./StartingOverlay.css"

export default function StartingOverlay({setStartedGame}){
    return (
      <div className="starting-overlay">
        <h1>Welcome to Cozy Hangman</h1>
        <p>Do you want to start?</p>
        <button onClick={() => setStartedGame((prev) => !prev)}>
          Press me!
        </button>
      </div>
    );
}