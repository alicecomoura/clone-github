import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
} from "react-icons/ri";

import styled, { css } from "styled-components";
import { themes } from "../../styles/themes";

export const Container = styled.div``;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 24px;

    > h1 {
      font-size: 26px;
      line-height: 1.25;
      color: ${themes["gray-dark"]};
      font-weight: 600;
    }

    > h2 {
      font-size: 20px;
      color: ${themes.username};
    }

    > button {
      background: #373e47;
      color: #adbac7;

      padding: 5px 16px;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;

      border: 1px solid #cdd9e51a;
      border-radius: 6px;

      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
    }
  }
  
  @media(min-width: 768px) {
   flex-direction: column;
   align-items: flex-start;

   > div {
     margin-left: 0;
     margin-top: 16px;
   }
  }

`;

export const Avatar = styled.img`
  width: 16%;
  border-radius: 50%;

  @media(min-width: 768px) {
    width: 100%;
  }
`;

export const Row = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;

  > li {
    display: flex;
    align-items: center;

    > span {
      font-size: 14px;
      color: ${themes.gray};
    }

    > * {
      margin-right: 5px;
    }
  }
`;

export const Column = styled.ul`
  li {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  li + li {
    margin-top: 10px;
  }

  span {
    margin-left: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: ${themes.icon};
  flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`
  ${iconCSS}
`;

export const CompanyIcon = styled(RiBuilding4Line)`
  ${iconCSS}
`;

export const EmailIcon = styled(RiMailLine)`
  ${iconCSS}
`;

export const LocationIcon = styled(RiMapPin2Line)`
  ${iconCSS}
`;

export const BlogIcon = styled(RiLinksLine)`
  ${iconCSS}
`;
