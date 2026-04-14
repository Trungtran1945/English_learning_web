import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Vocabulary from "./pages/Vocabulary";
import Practice from "./pages/Practice";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
