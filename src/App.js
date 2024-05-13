import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/HomePage";
import Details from "./Components/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
