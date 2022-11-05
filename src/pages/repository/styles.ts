import styled, { css } from "styled-components";

import { RiBookMarkLine, RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { themes } from "../../styles/themes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  > p {
    font-size: 16px;
  }
`;

export const Breadcrumb = styled.div`
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;

  font-size: 18px;

  > a {
    color: ${themes.link};

    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    &.username {
      margin-left: 8px;
    }

    &.reponame {
      font-weight: 600;
    }
  }

  > span {
    padding: 0 5px;
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: ${themes.icon};
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`;

export const Stars = styled.ul`
  margin-top: 16px;
  display: flex;
  align-items: center;

  > li {
    display: flex;
    align-items: center;
    margin-right: 9px;

    > * {
      margin-right: 7px;
      color: ${themes.gray};
    }
  }
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;

export const LinkButton = styled.a`
      text-decoration: none;

  margin-top: 24px;
  background: ${themes["gray-dark"]};
  padding: 12px 17px;
  border-radius: 24px;
  width: max-content;

  display: flex;
  align-items: center;

  > span {
    color: ${themes.primary};
  }

  svg {
    fill: ${themes.primary};
    margin-right: 10px;
  }
`;

export const GithunIcon = styled(FaGithub)`
  ${iconCSS}
`;
