export interface Wallpaper {
  _id: string;
  title: string;
  description: string;
  league: string;
  imageUrl: string;
  uploadedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface League {
  id: string;
  name: string;
  logo: string;
  slug: string;
  description: string;
}

export interface Admin {
  email: string;
  token: string;
}

export interface User {
  isAdmin: boolean;
  token?: string;
}
