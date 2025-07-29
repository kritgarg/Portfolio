// src/App.jsx
import { useState } from "react";
import BootScreen from "./components/BootScreen";
import  Dashboard  from "./pages/Dashboard";

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="w-full h-full">
      {!booted ? (
        <BootScreen onComplete={() => setBooted(true)} />
      ) : (
        <Dashboard /> 
      )}
    </div>
  );
}

export default App;
