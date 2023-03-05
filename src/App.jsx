import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    // ------------ BEM Methodology --------------- //
    <Router>
      <div className="app">
        {/* --------------- Defining Routes For Routing Without Page Refresh ----------------- */}
        <Routes>
          <Route path="/" element={[<Navbar />, <Home />]} />
          <Route path="/checkout" element={[<Navbar />, <Checkout />]} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
