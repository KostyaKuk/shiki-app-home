import './App.css';
import CardList from './components/CardList';
import { useGetAnimeList } from './hooks/getAnimeList';

function App() {
  const { animeList, loading, error } = useGetAnimeList(10);

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <CardList animeList={animeList} />
    </div>
  );
}

export default App;
