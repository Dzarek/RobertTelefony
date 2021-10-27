import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Smartfony from "./components/SmartfonyPage";
import AccessoriesPage from "./components/AccessoriesPage";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Logo /> */}
        <Navbar />
        <Header />
        <Smartfony />
        <AccessoriesPage />
      </Router>
    </div>
  );
}

export default App;
