import { useState } from 'react';
import movie from '../api/movies';
import SearchBar from '../components/SearchBar';
import PosterList from '../components/PosterList';
import _ from 'lodash';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const PlaylistButton = styled.button`
  font-family: sans-serif;
  font-size: 16px;
  color: #3b3b3b;
  height: 44px;
  width: 125px;
  border-radius: 25px;
  border: 1px solid #adadad;
  background-color: white;
  margin-left: 8px;
  cursor: pointer;
`;

function SearchPage() {
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
    <>
      <SearchWrapper>
        <Link to="/playlist">
          <PlaylistButton>Playlist</PlaylistButton>
        </Link>
        <SearchBar onTitleSubmit={onTitleSubmit} />
      </SearchWrapper>
      <FlexWrapper>
        <PosterList isPlaylist={false} list={movies} />
      </FlexWrapper>
    </>
  )
}

export default SearchPage;
