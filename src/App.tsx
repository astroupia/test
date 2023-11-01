import { 
  Home,
  NavBar,
  Service } from "./Components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
