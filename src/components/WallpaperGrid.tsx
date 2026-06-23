import React from 'react';
import { motion } from 'framer-motion';
import { Wallpaper } from '../types';

interface WallpaperGridProps {
  wallpapers: Wallpaper[];
}

const WallpaperGrid: React.FC<WallpaperGridProps> = ({ wallpapers }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {wallpapers.map((wallpaper, index) => (
        <motion.div
          key={wallpaper._id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-secondary rounded-lg overflow-hidden shadow-lg cursor-pointer group"
        >
          <div className="relative h-48 overflow-hidden bg-gray-800">
            <img
              src={wallpaper.imageUrl}
              alt={wallpaper.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end p-3">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold text-sm">{wallpaper.title}</h3>
                <p className="text-xs text-gray-300">{wallpaper.league}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WallpaperGrid;
