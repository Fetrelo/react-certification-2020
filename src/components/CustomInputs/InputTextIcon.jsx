import React, { useContext } from 'react';
import styled from 'styled-components';
import { SearchContext } from '../../state/SearchResultsProvider';
import { GlobalContext } from '../../state/GlobalContextProvider';
import SvgMagnifier from '../svg/SvgMagnifier';

const Wrapper = styled.div`
  position: relative;
  background-color: #bebebe;
  margin: 0% 3%;
  border-radius: 25px;
  @media screen and (max-width: 280px) {
    width: 65%;
  }
`;

const SvgWrapper = styled.div`
  height: 100%;
  display: flex;
  padding: 0px 8px;
  position: absolute;
  align-items: center;
  pointer-events: none;
  justify-content: center;
`;

const InputWrapper = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
`;

const StyledInputText = styled.input`
  width: 95%;
  padding: 8px 5px;
  font-size: 1em;
  padding-left: calc(1em + 25px);
  border: none;
  background-color: transparent;
  color: ${(props) => (props.theme === 'dark' ? '#be4f4f' : '#525252')};
  &:focus {
    outline: none;
  }
`;

const InputTextIcon = () => {
  const {
    state: { theme },
  } = useContext(GlobalContext);
  const { search, setSearch, setFetchSearch } = useContext(SearchContext);

  const handleChange = (e) => {
    if (e.key === 'Enter') setFetchSearch(true);
  };

  return (
    <Wrapper role="search">
      <SvgWrapper>
        <SvgMagnifier theme={theme} />
      </SvgWrapper>
      <InputWrapper>
        <StyledInputText
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={handleChange}
          theme={theme}
        />
      </InputWrapper>
    </Wrapper>
  );
};

export default InputTextIcon;
