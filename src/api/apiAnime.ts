export const BASE_URL = 'https://shikimori.one/';

export const getAllListAnime = async (limit: number) => {
  const response = await fetch(`${BASE_URL}/api/animes?limit=${limit}`);

  if (!response.ok) {
    throw new Error('Failed response all list');
  }

  const data = await response.json();

  return data;
};
