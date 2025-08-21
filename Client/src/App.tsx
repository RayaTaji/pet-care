import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import styles from "./App.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer";
import BookAppointment from "./pages/BookAppointment/BookAppointment";

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookAppointment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
