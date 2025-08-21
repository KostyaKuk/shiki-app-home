import './App.css';
import CardList from './components/CardList';
import Header from './components/header/Header';
import { useGetAnimeList } from './hooks/getAnimeList';

function App() {
  const { animeList, loading, error } = useGetAnimeList(12);

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header />
      <CardList animeList={animeList} />
    </div>
  );
}

export default App;
