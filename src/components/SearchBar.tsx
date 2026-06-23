import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import { useWallpaperStore } from '../store/wallpaperStore';

const SearchBar: React.FC = () => {
  const { searchWallpapers } = useWallpaperStore();
  const [query, setQuery] = React.useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    searchWallpapers(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto mb-8"
    >
      <div className="relative">
        <FiSearch className="absolute left-3 top-3 text-gray-400 text-xl" />
        <input
          type="text"
          placeholder="Search wallpapers..."
          value={query}
          onChange={handleSearch}
          className="w-full pl-10 pr-4 py-2 bg-secondary border border-accent rounded-lg focus:outline-none focus:border-highlight text-white placeholder-gray-500 transition"
        />
      </div>
    </motion.div>
  );
};

export default SearchBar;
