import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface League {
  id: string;
  name: string;
  logo: string;
  slug: string;
}

const leagues: League[] = [
  {
    id: '1',
    name: 'World Cup',
    logo: '🌍',
    slug: 'world-cup',
  },
  {
    id: '2',
    name: 'Champions League',
    logo: '🏆',
    slug: 'champions-league',
  },
  {
    id: '3',
    name: 'Premier League',
    logo: '🇬🇧',
    slug: 'premier-league',
  },
  {
    id: '4',
    name: 'La Liga',
    logo: '🇪🇸',
    slug: 'la-liga',
  },
  {
    id: '5',
    name: 'Serie A',
    logo: '🇮🇹',
    slug: 'serie-a',
  },
  {
    id: '6',
    name: 'Bundesliga',
    logo: '🇩🇪',
    slug: 'bundesliga',
  },
  {
    id: '7',
    name: 'Ligue 1',
    logo: '🇫🇷',
    slug: 'ligue-1',
  },
  {
    id: '8',
    name: 'Copa América',
    logo: '🏅',
    slug: 'copa-america',
  },
];

const LeagueButtons: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto pb-4 mb-8">
      <div className="flex gap-4 min-w-max px-4">
        {leagues.map((league, index) => (
          <motion.div
            key={league.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to={`/league/${league.slug}`}
              className="flex items-center gap-2 bg-secondary hover:bg-accent border border-accent hover:border-highlight px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap text-white hover:text-highlight"
            >
              <span className="text-2xl">{league.logo}</span>
              <span className="font-semibold hidden sm:inline">{league.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LeagueButtons;
