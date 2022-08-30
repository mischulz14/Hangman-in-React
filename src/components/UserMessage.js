
import "./UserMessage.css"

export default function UserMessage({startedGame}){

    return(
        <div className={`user-message ${startedGame ? "disappear" : ""}`}>
            If you can see 6 stars you lost ...
        </div>
    ) }



