import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import axios from 'axios';

const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Hardcoded credentials for now
      if (
        email === 'footemjid@gmail.com' &&
        password === 'footemm2010@gmail.com'
      ) {
        const mockToken = 'admin_token_' + Date.now();
        login(mockToken);
        navigate('/admin/upload');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto mt-12"
    >
      <div className="bg-secondary p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2 text-highlight text-center">Admin Login</h1>
        <p className="text-gray-400 text-center mb-6">Upload your football wallpapers</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="footemjid@gmail.com"
              className="w-full px-4 py-2 bg-primary border border-accent rounded-lg focus:outline-none focus:border-highlight text-white placeholder-gray-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-primary border border-accent rounded-lg focus:outline-none focus:border-highlight text-white placeholder-gray-500 transition"
              required
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-900 border border-red-500 text-red-200 px-4 py-2 rounded"
            >
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-highlight hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default AdminLoginPage;
