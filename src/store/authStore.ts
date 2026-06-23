import { create } from 'zustand';
import Cookies from 'js-cookie';

interface AuthStore {
  isAdmin: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  checkAuth: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAdmin: false,
  token: null,
  login: (token: string) => {
    Cookies.set('adminToken', token, { expires: 7 });
    set({ isAdmin: true, token });
  },
  logout: () => {
    Cookies.remove('adminToken');
    set({ isAdmin: false, token: null });
  },
  checkAuth: () => {
    const token = Cookies.get('adminToken');
    if (token) {
      set({ isAdmin: true, token });
    }
  },
}));
