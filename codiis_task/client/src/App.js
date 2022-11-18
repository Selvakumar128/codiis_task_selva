import logo from "./logo.svg";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Navigation from "./pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
