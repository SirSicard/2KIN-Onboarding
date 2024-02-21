import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import lightmode from "./styles/lightmode.module.css"

function App() {
  return (
    <>
    <header className={lightmode}>
      <Navbar />
      </header>
      <main className={lightmode}>
      <Outlet />
      </main>

      <Footer />

      
    </>
  );
}
export default App;
