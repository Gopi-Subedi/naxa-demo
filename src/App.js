import "./App.css";
import Portfolio from "./components/portfolio/body/portfolio";
import Navbar from "./components/portfolio/header/navbar";
import { Route, Routes } from "react-router-dom";
import UpperFooter from "./components/portfolio/footer/upperFooter";
import BottomFooter from "./components/portfolio/footer/bottomFooter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
      <UpperFooter />
      <BottomFooter />
    </div>
  );
}

export default App;
