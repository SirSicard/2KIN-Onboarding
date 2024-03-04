import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import lightmode from "./styles/lightmode.module.css";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup";
import { GlobalProvider } from './GlobalContext';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleLogin = (event) => {
    event.preventDefault(); // Prevent default behavior
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <>
    <GlobalProvider>
      <header className={lightmode}>
        <Navbar onLoginClick={(event) => toggleLogin(event)} />
      </header>
      <main className={lightmode}>
        <Outlet context={toggleLogin} />
      </main>
      <Footer />
      {isLoginOpen && <LoginPopup onClose={() => setIsLoginOpen(false)} />}
      </GlobalProvider>
    </>
  );
}
export default App;
