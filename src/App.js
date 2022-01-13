import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Smartfony from "./components/SmartfonyPage";
import AccessoriesPage from "./components/AccessoriesPage";
import ServicePage from "./components/ServicePage";
import AboutMePage from "./components/AboutMePage";
import FAQPage from "./components/FAQPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import GeneralInfo from "./components/GeneralInfo";
import DPD from "./components/DPD";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <Smartfony />
        <AccessoriesPage />
        <ServicePage />
        <AboutMePage />
        <GeneralInfo />
        <FAQPage />
        <DPD />
        <ContactPage />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
