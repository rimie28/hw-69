export interface Show {
  id: number;
  name: string;
  genres: string[];
  image?: {
    medium: string;
    original: string;
  };
  rating: {
    average: number;
  };
  summary: string;,
}

export interface SearchShow {
  show: Show;
}