import React from "react";
import Home from "./pages/Homepage/Home";
import styles from "./App.module.scss";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookAppointment from "./pages/BookAppointment/BookAppointment";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookAppointment />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
