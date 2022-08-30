import "./CompletedGame.css"
export default function CompletedGame(){
    return (
      <div className="winning-message">
        <h1>You went through all the words!</h1>
        <p>Do you want to try again?</p>
        <button onClick={() => window.location.reload()}>
          Press me!
        </button>
      </div>
    );
}