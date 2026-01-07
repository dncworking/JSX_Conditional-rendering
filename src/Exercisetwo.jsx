function Status() {
  const isLoggedIn = false;
  const isLoading = true;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isLoggedIn) {
    return <h1>Welcome, user!</h1>;
  } else return <h1>Please log in</h1>;
}

export default Status;
