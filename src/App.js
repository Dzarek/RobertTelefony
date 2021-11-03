import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Smartfony from "./components/SmartfonyPage";
import AccessoriesPage from "./components/AccessoriesPage";
import ServicePage from "./components/ServicePage";
import AboutMePage from "./components/AboutMePage";
import FAQPage from "./components/FAQPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Logo /> */}
        <Navbar />
        <Header />
        <Smartfony />
        <AccessoriesPage />
        <ServicePage />
        <AboutMePage />
        <FAQPage />
        <ContactPage />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
