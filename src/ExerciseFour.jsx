import Admin from "./ExerciseFourAdmin.jsx";
import Guest from "./ExerciseFourGuest.jsx";
import User from "./ExerciseFourUser.jsx";

function Role({ userRole }) {
  if (userRole === "admin") {
    return <Admin />;
  } else if (userRole === "guest") {
    return <Guest />;
  } else {
    <User />;
  }
}
export default Role;
