import { useState } from 'react';
import { func } from 'prop-types';
import {
  StyledInput,
  SearchButton,
  SearchIcon,
  FlexWrapper
} from './SearchBar.styles';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onTitleSubmit }) => {
  const [input, setInput] = useState('');

  function onInputChange(e) {
    setInput(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    onTitleSubmit(input);
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
