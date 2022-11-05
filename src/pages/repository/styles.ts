import styled, { css } from 'styled-components';

import { RiBookMarkLine, RiStarLine } from 'react-icons/ri'
import { AiOutlineFork } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { themes } from '../../styles/themes';

export const Container = styled.div`
  
`;

export const Breadcrumb = styled.div``

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: ${themes.icon};
  flex-shrink: 0;
`

export const RepoIcon = styled(RiBookMarkLine)`${iconCSS}`

export const Stars = styled.div``

export const StarIcon = styled(RiStarLine)`${iconCSS}`

export const ForkIcon = styled(AiOutlineFork)`${iconCSS}`

export const LinkButton = styled.a``

export const GithunIcon = styled(FaGithub)`${iconCSS}`















