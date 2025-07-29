import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import Question1 from "./pages/quiz/questions/question1";
import Results from "./pages/quiz/results/Results";
import Diseases from "./pages/diseases/Diseases";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import CreateUser from "./pages/create-user/CreateUser";
import AboutUs from "./pages/aboutUs/AboutUs";
import NotFound from "./pages/not-found/NotFound";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import ProtectedRoute from "./utils/ProtectedRoute";
import PageHA from "./pages/diseases/HA/PageHA";
import PageEC from "./pages/diseases/EC/PageEC";
import PageEAC from "./pages/diseases/EAC/PageEAC";
import PageIC from "./pages/diseases/IC/PageIC";
import Contact from "./pages/contact/Contact";
import Help from "./pages/help/Help";
import Terms from "./pages/terms/Terms";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/start" element={<Question1 />} />
          <Route path="/quiz/resultados" element={<Results />} />
          <Route path="/enfermedades" element={<Diseases />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/ayuda" element={<Help />} />
          <Route path="/terminos" element={<Terms />} />
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
          <Route path="/create-user" element={<CreateUser />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
