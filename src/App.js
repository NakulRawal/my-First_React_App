import React, { useState } from "react";
import About from "./components/About";
import About1 from "./components/1About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { HashRouter, Routes, Route } from "react-router-dom";
const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggleModeGreen = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "green";
      showAlert("GreenDark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#172335";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <HashRouter>
        <Navbar
          title="Nocool"
          mode={mode}
          toggleMode={toggleMode}
          toggleModeGreen={toggleModeGreen}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />

            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyse: "
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
        <About1 mode={mode} />
        {/* <About /> */}
      </HashRouter>
    </>
  );
};

export default App;
