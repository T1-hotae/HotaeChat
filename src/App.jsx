import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Chat from "./page/Chat";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
