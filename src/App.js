import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Legal from "./pages/Legal/Legal";
import Appointment from "./pages/Appointment/Appointment";
function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
