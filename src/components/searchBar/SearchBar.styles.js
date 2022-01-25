import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledInput = styled.input`
  font-family: sans-serif;
  font-size: 16px;
  outline: none;
  height: 40px;
  width: 210px;
  padding-left: 14px;
  margin-left: 8px;
  border-radius: 25px;
  border: 1px solid #adadad;
`;

export const SearchButton = styled.button`
  height: 44px;
  width: 44px;
  border-radius: 25px;
  border: 1px solid #adadad;
  background-color: white;
  margin-left: 8px;
  cursor: pointer;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  margin-top: 1px;
  margin-left: 1px;
  height: 20px;
  width: 20px;
  color: #757575;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
