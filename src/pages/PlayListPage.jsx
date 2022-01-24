import PosterList from '../components/PosterList';
import _ from 'lodash';
import styled from 'styled-components'
import { usePlaylist } from '../context/playlist';
import { Link } from 'react-router-dom';

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;
const StyledLinkButton = styled.button`
  font-family: sans-serif;
  font-size: 16px;
  color: #3b3b3b;
  height: 44px;
  width: 100px;
  border-radius: 25px;
  border: 1px solid #adadad;
  background-color: white;
  margin-left: 8px;
  cursor: pointer;
`;

const PlaylistHeader = styled.div`
  font-family: sans-serif;
  font-size: 32px;
  color: #3b3b3b;
  margin-left: 100px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

function PlayListPage() {
  const { playlist } = usePlaylist();

  return (
    <>
      <HeaderWrapper>
        <Link to="/">
          <StyledLinkButton>
            Back
          </StyledLinkButton>
        </Link>
        <PlaylistHeader>Playlist:</PlaylistHeader>
      </HeaderWrapper>
      <FlexWrapper>
        <PosterList isPlaylist={true} list={playlist} />
      </FlexWrapper>
    </>
  )
}

export default PlayListPage;
