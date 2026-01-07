import "./App.css";
import One from "./ExerciseOne.jsx";
import Two from "./Exercisetwo.jsx";
import Three from "./ExerciseThree.jsx";
import Role from "./ExerciseFour.jsx";

function App() {
  const userRole = "admin";
  return (
    <>
      <One />
      <Two />
      <Three />
      <div>
        <Role userRole={userRole} />
      </div>
    </>
  );
}

export default App;
