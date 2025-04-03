import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BookTrackingPage from "./Pages/BookTrackingPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BookTrackingPage />
    </>
  );
}

export default App;
