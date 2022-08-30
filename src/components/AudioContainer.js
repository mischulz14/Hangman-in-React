import { useState } from "react";
import sound from "../assets/music/cosy-prigida-main-version-02-58-17021.mp3"

import "./AudioContainer.css"

export default function AudioContainer(){
    const [clickedAudio, setClickedAudio] = useState(false)
    return (
      <div className="audio-container">
        <audio onPlay={() => setClickedAudio(true)} controls loop>
          <source src={sound} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>

        {!clickedAudio && (
          <p>
            ⬆ <br></br> Music ?
          </p>
        )}
      </div>
    );
}