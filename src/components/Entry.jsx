import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

const createEntry = (emoji) => {
  return (
    <Card
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
};

const MapedEntry = emojipedia.map(createEntry);

export default MapedEntry;
