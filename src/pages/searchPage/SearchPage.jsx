import SearchBar from '../../components/searchBar';
import PosterList from '../../components/posterList';
import { Link } from 'react-router-dom';
import { useSearchHistory } from '../../context/searchHistory';
import { FlexWrapper, SearchWrapper, PlaylistButton } from './SearchPage.styles';

function SearchPage() {
  const { movies, onTitleSubmit } = useSearchHistory();
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
