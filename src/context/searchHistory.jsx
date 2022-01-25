import { createContext, useState, useContext } from 'react';
import movie from '../api/movies';
import _ from 'lodash';

export const Context = createContext();
export const useSearchHistory = () => useContext(Context);

export default function SearchHistoryContextProvider({ children }) {
  const [movies, setMovies] = useState();

  async function onTitleSubmit(title) {
    try {
      const response = await movie.get(`?s=${_.startCase(title)}&apikey=495a7b03`);
      setMovies(response.data.Search);
    } catch (e) {
      throw e;
    }
  }

  return (
    <Context.Provider value={{ onTitleSubmit, movies }}>
      {children}
    </Context.Provider>
  );
}
