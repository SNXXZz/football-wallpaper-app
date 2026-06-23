import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header, Footer } from './components';
import { useAuthStore } from './store/authStore';
import HomePage from './pages/HomePage';
import LeaguePage from './pages/LeaguePage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminUploadPage from './pages/AdminUploadPage';
import TermsPage from './pages/TermsPage';
import './index.css';

function App() {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Router>
      <div className="min-h-screen bg-primary text-white flex flex-col">
        <Header />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/league/:slug" element={<LeaguePage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/upload" element={<AdminUploadPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
