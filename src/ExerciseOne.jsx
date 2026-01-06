import { useState } from "react";

function Log() {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  return (
    <>
      {" "}
      <h1>{isLoggedIn ? "Welcome!" : "Please loggin"}</h1>
      <button onClick={() => setIsloggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
    </>
  );
}
export default Log;
