import styles from './CardItem.module.scss';
import type { AnimeCard } from '../../types/types';

const CardItem = ({ animeList }: { animeList: AnimeCard }) => {
  return (
    <div className={styles['card-item']}>
      <div className={styles['card-image']}>
        <img
          src={`https://shikimori.one${animeList.image.preview}`}
          alt={animeList.name}
          loading="lazy"
        />
      </div>

      <div className={styles['card-content']}>
        <h3 className={styles['card-title']}>
          {animeList.russian || animeList.name}
        </h3>
        {animeList.name !== animeList.russian && (
          <p className={styles['card-original-title']}>{animeList.name}</p>
        )}

        <div className={styles['card-details']}>
          <span className={styles['card-kind']}>{animeList.kind}</span>
          <span className={styles['card-score']}>⭐ {animeList.score}</span>
          {animeList.episodes && (
            <span className={styles['card-episodes']}>
              Episodes: {animeList.episodes}
            </span>
          )}
          <span className={styles['card-status']}>{animeList.status}</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
