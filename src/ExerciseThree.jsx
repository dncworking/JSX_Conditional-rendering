function Profile() {
  const isLoggedIn = false;
  return (
    <div>
      {isLoggedIn && <button>Profile</button>}
      {isLoggedIn || (
        <div>
          <button>Log in</button>
          <button>Sing up</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
