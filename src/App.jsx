import { useState } from "react";

import "./App.css";
import { Home } from "./components/home";
import { HooksDemo } from "./components/hooks";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <nav
        style={{
          textAlign: "center",
          padding: "10px",
          display: "flex",
          gap: "12px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("hooks")}>Hooks</button>
      </nav>
      {page === "home" ? <Home /> : <HooksDemo />}
    </div>
  );
}

export default App;
