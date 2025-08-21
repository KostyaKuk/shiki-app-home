import styles from './header.module.scss';
import InputElem from './inputElem/inputElem';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['menu-logo']}>
        <a className={styles['logo-container']}>
          <div className={styles['glyph']}>Ani.Peace</div>
          <div className={styles['logo']}></div>
        </a>
      </div>
      <div className={styles['global-search']}>
        <InputElem />
      </div>
    </header>
  );
};

export default Header;
