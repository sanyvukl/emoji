import React from "react";
import MapedEntry from "./Entry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{MapedEntry}</dl>
    </div>
  );
}

export default App;
