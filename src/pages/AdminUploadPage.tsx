import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { FiUploadCloud } from 'react-icons/fi';
import axios from 'axios';

const leagueOptions = [
  { value: 'world-cup', label: '🌍 World Cup' },
  { value: 'champions-league', label: '🏆 Champions League' },
  { value: 'premier-league', label: '🇬🇧 Premier League' },
  { value: 'la-liga', label: '🇪🇸 La Liga' },
  { value: 'serie-a', label: '🇮🇹 Serie A' },
  { value: 'bundesliga', label: '🇩🇪 Bundesliga' },
  { value: 'ligue-1', label: '🇫🇷 Ligue 1' },
  { value: 'copa-america', label: '🏅 Copa América' },
];

const AdminUploadPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [league, setLeague] = useState('world-cup');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { isAdmin } = useAuthStore();
  const navigate = useNavigate();

  if (!isAdmin) {
    navigate('/admin/login');
    return null;
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select an image');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('league', league);
    formData.append('image', file);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/wallpapers/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setMessage('✅ Wallpaper uploaded successfully!');
      setTitle('');
      setDescription('');
      setFile(null);
      setPreview(null);
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('❌ Error uploading wallpaper. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto mt-8"
    >
      <h1 className="text-3xl font-bold mb-8 text-highlight text-center">Upload Wallpaper</h1>

      <div className="bg-secondary p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">Wallpaper Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Ronaldo Goal Celebration"
              className="w-full px-4 py-2 bg-primary border border-accent rounded-lg focus:outline-none focus:border-highlight text-white placeholder-gray-500 transition"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a description..."
              rows={3}
              className="w-full px-4 py-2 bg-primary border border-accent rounded-lg focus:outline-none focus:border-highlight text-white placeholder-gray-500 transition resize-none"
              required
            />
          </div>

          {/* League Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">League</label>
            <select
              value={league}
              onChange={(e) => setLeague(e.target.value)}
              className="w-full px-4 py-2 bg-primary border border-accent rounded-lg focus:outline-none focus:border-highlight text-white transition"
            >
              {leagueOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Upload Image</label>
            <div className="border-2 border-dashed border-accent rounded-lg p-6 text-center cursor-pointer hover:border-highlight transition">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="file-input"
                required
              />
              <label htmlFor="file-input" className="cursor-pointer">
                <FiUploadCloud className="mx-auto text-4xl mb-2 text-accent" />
                <p className="text-gray-300 mb-1">Click to upload or drag and drop</p>
                <p className="text-gray-500 text-sm">PNG, JPG, GIF up to 5MB</p>
              </label>
            </div>
          </div>

          {/* Preview */}
          {preview && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <label className="block text-sm font-medium mb-2">Preview</label>
              <img
                src={preview}
                alt="Preview"
                className="w-full h-64 object-cover rounded-lg"
              />
            </motion.div>
          )}

          {/* Message */}
          {message && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`p-4 rounded-lg ${
                message.includes('✅')
                  ? 'bg-green-900 border border-green-500 text-green-200'
                  : 'bg-red-900 border border-red-500 text-red-200'
              }`}
            >
              {message}
            </motion.div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-highlight hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Uploading...' : 'Upload Wallpaper'}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default AdminUploadPage;
