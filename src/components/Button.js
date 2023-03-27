import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./Button.css";

const animals = ["cat", "dog", "bird", "cow", "horse", "gator"];
function selectAnimal() {
  return animals[Math.floor(Math.random() * animals.length)];
}

function Button() {
  const [animal, setAnimal] = useState([]);

  function onButtonClick() {
    setAnimal([...animal, selectAnimal()]);
  }
  const renderedAnimals = animal.map((anim, index) => {
    return <AnimalShow type={anim} key={index} />;
  });

  return (
    <div>
      <h3>Identify the animal</h3>
      <button className="buttonDesign" onClick={onButtonClick}>
        Click for new Animal
      </button>
      <br />
      <div className="animalList">{renderedAnimals}</div>
    </div>
  );
}

export default Button;
