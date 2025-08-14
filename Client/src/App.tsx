import React from "react";
import Home from "./pages/Home";
import styles from "./App.module.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className={styles.container}>
      <Home />
      <Footer />
    </div>
  );
};

export default App;
