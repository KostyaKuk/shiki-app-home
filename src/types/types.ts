export interface AnimeCard {
  id: string;
  name: string;
  russian?: string;
  image: {
    original: string;
    preview: string;
  };
  url: string;
  kind: string;
  score: string;
  episodes?: number;
  status?: string;
  description?: string;
}
