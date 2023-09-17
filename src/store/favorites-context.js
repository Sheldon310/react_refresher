import { createContext, useState } from 'react';

const FavoritesContext = createContext({ // createContext() 可以傳入一個初始值參數
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {}, // 讓 IDＥ 可以自動完成使用上方便，也可以不加
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

export const FavoritesContextProvider = (props) => {
  const [useFavorites, setUserFavorites] = useState([]);

  const addFavoritesHandler = (favoriteMeetup) => {
    setUserFavorites((prevUserFavorites) => { // 保持狀態快照是最新
      return prevUserFavorites.concat(favoriteMeetup);
    });
  };

  const removeFavoritesHandler = (meetupId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  };

  const itemIsFavoritesHandler = (meetupId) => {
    return useFavorites.some(meetup => meetup.id === meetupId);
  };

  const context = {
    favorites: useFavorites,
    totalFavorites: useFavorites.length,
    addFavorite: addFavoritesHandler,
    removeFavorite: removeFavoritesHandler,
    itemIsFavorite: itemIsFavoritesHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;