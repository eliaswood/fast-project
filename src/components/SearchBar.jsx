import { useState } from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const StyledInput = styled.input`
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

const SearchButton = styled.button`
  height: 44px;
  width: 44px;
  border-radius: 25px;
  border: 1px solid #adadad;
  background-color: white;
  margin-left: 8px;
  cursor: pointer;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  height: 20px;
  width: 20px;
  color: #adadad;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const SearchBar = ({ onTitleSubmit }) => {
  const [input, setInput] = useState('');

  function onInputChange(e) {
    setInput(e.target.value)
  }

  function onFormSubmit(e) {
    e.preventDefault();
    onTitleSubmit(input)
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <FlexWrapper>
          <StyledInput
            type='text'
            value={input}
            onChange={onInputChange}
            placeholder="Enter movie title"
          />
          <SearchButton type='submit' onClick={onFormSubmit}>
            <SearchIcon icon={faSearch} />
          </SearchButton>
        </FlexWrapper>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  onTitleSubmit: func
}

SearchBar.defaultProps = {
  onTitleSubmit: () => null
}

export default SearchBar;
