import styled from 'styled-components';

import { FaGithub } from 'react-icons/fa'
import { themes } from '../../styles/themes'


export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 25px;
`;


export const Line = styled.div`
  max-width: 1280px;
  width: 100%;

  border-top: 1px solid ${themes.border};
`
export const GithubLogo = styled(FaGithub)`
  margin: 18px 0;

  fill: ${themes.border};
  width: 24px;
  height: 24px;
  flex-shrink: 0;

`