import React from "react";
import Home from "./pages/Home";
import styles from "./App.module.scss";
const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
};

export default App;
