import FloatingSquares from "../components/FloatingSquares";
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Floating retro squares */}
      <FloatingSquares count={40} />

      {/* === Your existing Dashboard UI === */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center text-orange-400">
        <h1 className="text-4xl font-bold mb-6">LEVEL 1: DASHBOARD</h1>
        <p className="text-xl">Hey, I’m Krit! 🚀 Designer | Developer</p>
        {/* rest of your components */}
      </div>
    </div>
  );
}
