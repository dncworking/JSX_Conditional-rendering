import { useState } from "react";

import "./App.css";
import One from "./ExerciseOne.jsx";
import Two from "./Exercisetwo.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <One />
      <Two />
    </>
  );
}

export default App;
