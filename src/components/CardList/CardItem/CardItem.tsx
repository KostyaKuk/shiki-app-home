import styles from './CardItem.module.scss';
import type { AnimeCard } from '../../../types/types';

interface CardItemProps {
  anime: AnimeCard;
}

const CardItem = ({ anime }: CardItemProps) => {
  return (
    <div className={styles['card-item']}>
      <div className={styles['card-image']}>
        <img
          src={`https://shikimori.one${anime.image.preview}`}
          alt={anime.name}
          loading="lazy"
        />
      </div>

      <div className={styles['card-content']}>
        <h3 className={styles['card-title']}>{anime.russian || anime.name}</h3>
        {anime.name !== anime.russian && (
          <p className={styles['card-original-title']}>{anime.name}</p>
        )}

        <div className={styles['card-details']}>
          <span className={styles['card-kind']}>{anime.kind}</span>
          <span className={styles['card-score']}>⭐ {anime.score}</span>
          {anime.episodes && (
            <span className={styles['card-episodes']}>
              Episodes: {anime.episodes}
            </span>
          )}
          <span className={styles['card-status']}>{anime.status}</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
