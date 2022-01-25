import { useState } from 'react'
import { usePlaylist } from '../../context/playlist';
import {
  Icon,
  AddToPlayListButton,
  Poster,
  InPlaylist,
  PosterWrapper
} from './moviePoster.styles';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const MoviePoster = ({ imgLink, imgAlt, movie, isPlaylist }) => {
  const { addToPlaylist, removeFromPlaylist } = usePlaylist();
  const [isInPlaylist, setIsInPlaylist] = useState(false);

  function whichPage() {
    if (isPlaylist) {
      return (
        <AddToPlayListButton onClick={() => removeFromPlaylist(movie)}>
          <Icon icon={faTimes} />
        </AddToPlayListButton>
      )
    } else {
      if (isInPlaylist) {
       return <InPlaylist>In Playlist</InPlaylist>
      } else {
        return (
          <AddToPlayListButton
            onClick={() => {
              addToPlaylist(movie);
              setIsInPlaylist(true);
            }}
          >
            <Icon icon={faPlus} />
          </AddToPlayListButton>
        )    
      }
    }
  }
  
  return (
    <PosterWrapper isInPlayList={isInPlaylist}>
      <Poster src={imgLink} alt={imgAlt} />
      {whichPage()}
    </PosterWrapper>
  )
};

export default MoviePoster;