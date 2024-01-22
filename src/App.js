import { useState } from "react";
import AcercaDe from "./components/AcercaDe";
import Contacto from "./components/Contacto";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import NavLinks from "./components/NavLinks";
import Portafolio from "./components/Portafolio";
import SocialLinks from "./components/SocialLinks";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }

  return (
    <div className={`h-full w-full mx-auto ${darkMode ? "dark" : ""}`}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Inicio darkMode={darkMode} />
      <AcercaDe darkMode={darkMode} />
      <Portafolio darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Contacto darkMode={darkMode} />
      <NavLinks darkMode={darkMode} />
      <SocialLinks darkMode={darkMode} />
      <ScrollToTopButton darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;
