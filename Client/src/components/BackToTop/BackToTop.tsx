import styles from "./BackToTop.module.scss";
import Button from "../Button/Button";
import { FaArrowUp } from "react-icons/fa";

import { useEffect, useState } from "react";
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;
  return (
    <div className={styles.container}>
      <Button variant="circular" onClick={scrollToTop}>
        <FaArrowUp className={styles.arrow} />
      </Button>
    </div>
  );
}

export default BackToTop;
