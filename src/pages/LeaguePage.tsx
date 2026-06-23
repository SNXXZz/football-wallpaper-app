import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WallpaperGrid } from '../components';
import { useWallpaperStore } from '../store/wallpaperStore';
import axios from 'axios';

const leagueNames: { [key: string]: string } = {
  'world-cup': 'World Cup',
  'champions-league': 'Champions League',
  'premier-league': 'Premier League',
  'la-liga': 'La Liga',
  'serie-a': 'Serie A',
  'bundesliga': 'Bundesliga',
  'ligue-1': 'Ligue 1',
  'copa-america': 'Copa América',
};

const LeaguePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { filteredWallpapers, filterByLeague, wallpapers, setWallpapers } = useWallpaperStore();

  useEffect(() => {
    const fetchWallpapers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/wallpapers/league/${slug}`);
        setWallpapers(response.data);
      } catch (error) {
        console.error('Error fetching league wallpapers:', error);
      }
    };

    fetchWallpapers();
    if (slug) {
      filterByLeague(slug);
    }
  }, [slug, filterByLeague, setWallpapers]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-highlight">
          {leagueNames[slug || ''] || 'League'} Wallpapers
        </h1>
        <p className="text-gray-400">
          Browse beautiful wallpapers from {leagueNames[slug || '']}
        </p>
      </div>

      <div>
        {filteredWallpapers.length > 0 ? (
          <WallpaperGrid wallpapers={filteredWallpapers} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No wallpapers available for this league yet.</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default LeaguePage;
