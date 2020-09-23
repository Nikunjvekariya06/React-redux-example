import React from "react";

function Home(props) {
  console.warn("props", props.data);
  return (
    <>
      <h1>Welcome to Admin</h1>
      <h2>Counter {props.data.length}</h2>
      <button onClick={() => props.IncreementHandler({ price: 1000 })}>
        +
      </button>
      <button onClick={() => props.decreementHandler({ price: 1000 })}>
        -
      </button>
    </>
  );
}
export default Home;
