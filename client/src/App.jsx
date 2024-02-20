import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
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
    </>
  );
}
export default App;
