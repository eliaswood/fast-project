import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icon = styled(FontAwesomeIcon)`
  color: #adadad;
`;

export const AddToPlayListButton = styled.button`
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

export const Poster = styled.img`
  height: 440px;
  width: 290px;
  z-index: 1
`;

export const InPlaylist = styled.div`
  opacity: 0;
  height: 44px;
  width: 100px;
  border-radius: 30px;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  border: 3px solid #fff;
  color: #fff;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PosterWrapper = styled.div`
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
    color: #fff;
  }

  &:hover ${props => props.isInPlayList ? InPlaylist: AddToPlayListButton} {
    opacity: 1;
    z-index: 2;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 16px;
    margin-right: 16px;
  }
`;