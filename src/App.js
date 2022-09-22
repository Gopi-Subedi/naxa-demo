import "./App.css";
import Portfolio from "./components/portfolio/portfolio";
import Navbar from "./components/layout/header/navbar";
import { Route, Routes } from "react-router-dom";
import UpperFooter from "./components/layout/footer/upperFooter";
import BottomFooter from "./components/layout/footer/bottomFooter";
import ContactForm from "./components/contact/formSection/contactForm";
import BasicMap from "./components/contact/mapSection/basicMap";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route
          path="/contact"
          element={
            <>
              <ContactForm />
              <BasicMap />
            </>
          }
        />
      </Routes>
      <UpperFooter />
      <BottomFooter />
    </div>
  );
}

export default App;
