import { createContext, useState, useContext } from 'react';

export const Context = createContext();
export const usePlaylist = () => useContext(Context)

export default function PlaylistContextProvider({ children }) {
  const [playlist, setPlaylist] = useState([]);
  
  function addToPlaylist(movie) {
    const isInPlaylist = playlist.find(item => item.imdbID === movie.imdbID)

    if (!isInPlaylist) {
      setPlaylist([...playlist, movie]);
    } else {
      return playlist;
    }
  }

  function removeFromPlaylist(movie) {
    const removeItem = playlist.filter(item => item.imdbID !== movie.imdbID)
    setPlaylist(removeItem)
  }

  return (
    <Context.Provider value={{ playlist, addToPlaylist, removeFromPlaylist }}>
      {children}
    </Context.Provider>
  );
}
