import styled from 'styled-components'

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const PlaylistButton = styled.button`
  font-family: sans-serif;
  font-size: 16px;
  color: #757575;
  height: 44px;
  width: 125px;
  border-radius: 25px;
  border: 1px solid #adadad;
  background-color: white;
  margin-left: 8px;
  cursor: pointer;
`;
