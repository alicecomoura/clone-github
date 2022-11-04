import styled from 'styled-components';
import { themes } from '../../styles/themes'

import { FaGithub } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${themes.header};
  padding: 11px 16px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: ${themes.logo};]
  width: 32px;
  height: 32px;
  flex-shrink;
`
export const SearchForm = styled.form`
  width: 100%;
  padding-left: 16px;

  input {
    background: ${themes.search};
    border-radius: 6px;
    padding: 7px 12px;
    width: 180px;

    &:focus {
      width: 318px;
    }

    transition: width 0.2s ease-out, color 0.2s ease-out;
  }
` 