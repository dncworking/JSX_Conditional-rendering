import "./App.css";
import One from "./ExerciseOne.jsx";
import Two from "./Exercisetwo.jsx";
import Three from "./ExerciseThree.jsx";
import Role from "./ExerciseFour.jsx";
import Five from "./ExerciseFive.jsx";
function App() {
  const userRole = "admin";
  return (
    <>
      <One />
      <Two />
      <Three />

      <Role userRole={userRole} />

      <Five />
    </>
  );
}

export default App;
