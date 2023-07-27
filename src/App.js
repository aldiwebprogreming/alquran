// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Surah from "./components/Surah";
import PageSurah from "./pages/PageSurah";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <div className="App">
      {/* <h3>Hello {<Skeleton count={10} />} </h3> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tentang" element={<About />}></Route>
          <Route path="/surah/:id" element={<PageSurah />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
