import styled, { css } from "styled-components";
import { RiBookMarkLine, RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";
import { themes } from "../../styles/themes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid ${themes.border};
  border-radius: 6px;
`;

export const TopContent = styled.div`
  header {
    display: flex;
    align-items: center;

    > a {
      margin-left: 8px;
      font-size: 14px;
      font-weight: 600;
      color: ${themes.link};

      text-decoration: none;

      &:focus,
      &:hover {
        text-decoration: underline;
      }
    }
  }

  p {
    margin: 8px 0 16px;
    font-size: 12px;
    color: ${themes.gray};
    letter-spacing: 0.1px;
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: ${themes.icon};
  flex-shrink;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`;

export const BottomContent = styled.div`
  ul {
    display: flex;
    align-items: center;

    > li {
      display: flex;
      align-items: center;
      margin-right: 16px;

      > span {
        margin-left: 5px;
        font-size: 12px;
        color: ${themes.gray};
      }
    }
  }

  .language {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;

    &.javascript {
      background: ${themes.javascript};
    }

    &.typescript {
      background: ${themes.typescript};
    }

    &.other {
      background: ${themes["other-language"]};
    }
  }
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;
