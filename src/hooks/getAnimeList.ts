import { useEffect, useState } from 'react';
import { getAllListAnime } from '../api/apiAnime';
import type { AnimeCard } from '../types/types';

export const useGetAnimeList = (limit: number) => {
  const [animeList, setAnimeList] = useState<AnimeCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        setLoading(true);
        const data = await getAllListAnime(limit);
        setAnimeList(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Not handler error');
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, [limit]);

  return { animeList, loading, error };
};
