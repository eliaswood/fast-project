import PosterList from '../../components/posterList/PosterList';
import { usePlaylist } from '../../context/playlist';
import { Link } from 'react-router-dom';
import {
  FlexWrapper,
  StyledLinkButton,
  PlaylistHeader,
  HeaderWrapper,
  Footer
} from './PlayListPage.styles';


function PlaylistPage() {
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
      <Footer>My favorite color is white.</Footer>
    </>
  )
}

export default PlaylistPage;
