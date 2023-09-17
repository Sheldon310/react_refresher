import { useContext } from 'react';

import { Link } from 'react-router-dom';

import styles from './MainNavigation.module.css'

import FavoritesContext from '../../store/favorites-context';

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>AllMeetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>NewMeetup</Link>
          </li>
          <li>
            <Link to='/favorites'>
              My Favorites
              <span className={styles.badge}>{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;