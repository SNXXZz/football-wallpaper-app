import { create } from 'zustand';
import { Wallpaper } from '../types';

interface WallpaperStore {
  wallpapers: Wallpaper[];
  filteredWallpapers: Wallpaper[];
  setWallpapers: (wallpapers: Wallpaper[]) => void;
  searchWallpapers: (query: string) => void;
  filterByLeague: (league: string) => void;
}

export const useWallpaperStore = create<WallpaperStore>((set) => ({
  wallpapers: [],
  filteredWallpapers: [],
  setWallpapers: (wallpapers: Wallpaper[]) => {
    set({ wallpapers, filteredWallpapers: wallpapers });
  },
  searchWallpapers: (query: string) =>
    set((state) => ({
      filteredWallpapers: state.wallpapers.filter(
        (w) =>
          w.title.toLowerCase().includes(query.toLowerCase()) ||
          w.description.toLowerCase().includes(query.toLowerCase()) ||
          w.league.toLowerCase().includes(query.toLowerCase())
      ),
    })),
  filterByLeague: (league: string) =>
    set((state) => ({
      filteredWallpapers:
        league === 'all'
          ? state.wallpapers
          : state.wallpapers.filter((w) => w.league === league),
    })),
}));
