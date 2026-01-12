import { useState } from "react";

function ExerciseSeven() {
  const [userType, setUserType] = useState();

  return (
    <>
      <h1>User form</h1>

      <form>
        <label>
          User type:
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="">SELECT</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </label>
      </form>
      {userType === "student" && (
        <div>
          <label>
            Grade:
            <input type="number" />
          </label>
        </div>
      )}

      {userType === "teacher" && (
        <div>
          <label>
            Subject:
            <input type="texr" />
          </label>
        </div>
      )}
    </>
  );
}
export default ExerciseSeven;
