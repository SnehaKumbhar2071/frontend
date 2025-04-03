import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Booklist from "./Pages/Booklist";
import BookDetailPage from "./Pages/BookDetailPage";
import BookTrackingPage from "./Pages/BookTrackingPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Booklist />
      {/* <BookDetailPage/> */}
      {/* <BookTrackingPage/> */}
    </>
  );
}

export default App;
