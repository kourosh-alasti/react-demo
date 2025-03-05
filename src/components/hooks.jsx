import { useState, useEffect } from "react";

export function HooksDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>Hooks Demo</h1>
      <div>
        <h2>useState Example</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <div>
        <h2>useState with Input</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name:"
        />
        <p>Your name is: {name}</p>
      </div>
      <div>
        <h2>useEffect Example</h2>
        {user ? <p>Fetched Name: {user.name}</p> : <p>Loading user....</p>}
      </div>
    </div>
  );
}
