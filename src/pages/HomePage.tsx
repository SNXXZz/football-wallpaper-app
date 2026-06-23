import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SearchBar, LeagueButtons, WallpaperGrid } from '../components';
import { useWallpaperStore } from '../store/wallpaperStore';
import axios from 'axios';

const HomePage: React.FC = () => {
  const { filteredWallpapers, setWallpapers } = useWallpaperStore();

  useEffect(() => {
    const fetchWallpapers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/wallpapers`);
        setWallpapers(response.data);
      } catch (error) {
        console.error('Error fetching wallpapers:', error);
        // Mock data for now
        setWallpapers([
          {
            _id: '1',
            title: 'Ronaldo Goal',
            description: 'Amazing goal moment',
            league: 'world-cup',
            imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop',
            uploadedBy: 'admin',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            _id: '2',
            title: 'Messi Celebration',
            description: 'Victory celebration',
            league: 'champions-league',
            imageUrl: 'https://images.unsplash.com/photo-1517241486620-6544ee54b02f?w=400&h=300&fit=crop',
            uploadedBy: 'admin',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            _id: '3',
            title: 'Stadium View',
            description: 'Beautiful stadium',
            league: 'premier-league',
            imageUrl: 'https://images.unsplash.com/photo-1522778119026-fc87db2ce94d?w=400&h=300&fit=crop',
            uploadedBy: 'admin',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            _id: '4',
            title: 'Team Photo',
            description: 'Team celebration',
            league: 'la-liga',
            imageUrl: 'https://images.unsplash.com/photo-1552109067-24694d3de953?w=400&h=300&fit=crop',
            uploadedBy: 'admin',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        ]);
      }
    };

    fetchWallpapers();
  }, [setWallpapers]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-highlight">Football Wallpapers</h1>
        <p className="text-center text-gray-400 mb-6">Download stunning football wallpapers from your favorite leagues</p>
      </div>

      <SearchBar />
      <LeagueButtons />

      <div>
        {filteredWallpapers.length > 0 ? (
          <WallpaperGrid wallpapers={filteredWallpapers} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No wallpapers found. Try a different search!</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default HomePage;
