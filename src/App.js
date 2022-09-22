import "./App.css";
import Portfolio from "./components/portfolio/body/portfolio";
import Navbar from "./components/portfolio/header/navbar";
import { Route, Routes } from "react-router-dom";
import UpperFooter from "./components/portfolio/footer/upperFooter";
import BottomFooter from "./components/portfolio/footer/bottomFooter";
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
