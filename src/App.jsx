import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Overlay from "./components/Overlay";
import './styles.css'
import './index.css'
const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      {loading ? <Loader /> : <Overlay />}
    </div>
  );
};

export default App;