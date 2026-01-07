function Notification() {
  //   const noti = "warning";
  // const noti = "success";
  const noti = "error";

  if (noti === "error") {
    return <h1 style={{ background: "red" }}>ERROR</h1>;
  } else if (noti === "warning") {
    return <h1 style={{ background: "yellow" }}>WARNING</h1>;
  } else {
    return <h1 style={{ background: "green" }}>SUCCESS</h1>;
  }
}

export default Notification;
