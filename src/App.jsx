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

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/enfermedades" element={<Diseases />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
