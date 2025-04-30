import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Quiz from "./pages/quiz/quiz";
import Diseases from "./pages/diseases/diseases";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import AboutUs from "./pages/aboutUS/AboutUs";
import NotFound from "./pages/not-found/NotFound";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import ProtectedRoute from "./utils/ProtectedRoute";
import PageHA from "./pages/diseases/HA/PageHA";
import PageEC from "./pages/diseases/EC/PageEC";
import PageEAC from "./pages/diseases/EAC/PageEAC";
import PageIC from "./pages/diseases/IC/PageIC";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/enfermedades" element={<Diseases />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/enfermedades/1" element={<PageHA />} />
        <Route path="/enfermedades/2" element={<PageEC />} />
        <Route path="/enfermedades/3" element={<PageEAC />} />
        <Route path="/enfermedades/4" element={<PageIC />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
