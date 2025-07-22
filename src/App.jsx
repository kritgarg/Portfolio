// src/App.jsx
import { useState } from "react";
import BootScreen from "./components/BootScreen";

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="w-full h-full">
      {!booted ? (
        <BootScreen onComplete={() => setBooted(true)} />
      ) : (
        <div className="bg-gray-900 text-white h-screen flex items-center justify-center">
          {/* This will later be your desktop */}
          <h1 className="text-3xl">Welcome to KritOS Desktop</h1>
        </div>
      )}
    </div>
  );
}

export default App;
