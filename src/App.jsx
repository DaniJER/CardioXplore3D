import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from './pages/home/home';
import Quiz from './pages/quiz/quiz';
import Diseases from './pages/diseases/diseases';
import Profile from './pages/profile/profile';
import Login from './pages/login/login';
import NotFound from './pages/not-found/NotFound';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import ProtectedRoute from './utils/ProtectedRoute';
import DiseaseDetail2 from './pages/diseases/Details/DiseaseDetail2';
import DiseaseDetail3 from './pages/diseases/Details/DiseaseDetail3';
import DiseaseDetail4 from './pages/diseases/Details/DiseaseDetail4';
import PageHA from './pages/diseases/HA/PageHA';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/enfermedades" element={<Diseases />} />
        <Route path='/enfermedades/1' element={<PageHA />} />
        <Route path='/enfermedades/2' element={<DiseaseDetail2 />} />
        <Route path='/enfermedades/3' element={<DiseaseDetail3 />} />
        <Route path='/enfermedades/4' element={<DiseaseDetail4 />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
