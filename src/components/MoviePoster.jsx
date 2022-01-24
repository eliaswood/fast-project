import { usePlaylist } from '../context/playlist';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

const Icon = styled(FontAwesomeIcon)`
  color: #adadad;
`;

const AddToPlayListButton = styled.button`
  opacity: 0;
  height: 50px;
  width: 50px;
  border-radius: 30px;
  border: 3px solid #adadad;
  background-color: transparent;
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    border: 3px solid #fff;
  }
  &:hover ${Icon} {
    color: #fff;
  }
`;

const Poster = styled.img`
  height: 440px;
  width: 290px;
  z-index: 1
`;
const PosterWrapper = styled.div`
  height: 440px;
  width: 290px;
  margin: 8px;
  position: relative;
  &:hover {
    cursor: pointer;
    background-color: black;
  }

  &:hover ${Poster} {
    opacity: 0.5;
  }

  &:hover ${AddToPlayListButton} {
    opacity: 1;
    z-index: 2;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 16px;
    margin-right: 16px;
  }
`;

const MoviePoster = ({ imgLink, imgAlt, movie, isPlaylist }) => {
  const { addToPlaylist, removeFromPlaylist } = usePlaylist()
  const whichFunc = isPlaylist ? removeFromPlaylist : addToPlaylist;
  const whichIcon = isPlaylist ? faTimes : faPlus;
  return (
    <PosterWrapper>
      <Poster src={imgLink} alt={imgAlt} />
      <AddToPlayListButton onClick={() => whichFunc(movie)}>
        <Icon icon={whichIcon} />
      </AddToPlayListButton>
    </PosterWrapper>
  )
};

export default MoviePoster;