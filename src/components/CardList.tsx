import styles from './CardList.module.scss';
import type { AnimeCard } from '../types/types';
import CardItem from './CardItem/CardItem';

const CardList = ({ animeList }: { animeList: AnimeCard[] }) => {
  return (
    <div className={styles['card-list']}>
      {animeList.map((anime) => (
        <CardItem key={anime.id} animeList={anime} />
      ))}
    </div>
  );
};

export default CardList;
