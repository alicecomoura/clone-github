import { RiBookMarkLine } from 'react-icons/ri'

import styled from "styled-components";
import { themes } from '../../styles/themes';

export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 24px;

  overflow: hidden;

  padding: var(--verticalPadding, --horizontalPadding);
`;

export const Main = styled.div`
  margin: 0 auto;
  max-width: 1280px;

  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftContent = styled.div`
  padding: 0 var(--horizontalPadding);

  @media (min-width: 768px) {
    width: 25%;
  }
`;
export const RightContent = styled.div`
  padding: 0 var(--horizontalPadding);

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const RepoList = styled.div`
  margin-top: var(--verticalPadding);
  
  > h2 {
    font-size: 16px;
    font-weight: normal;
  }

  > div {
    margin-top: 8px;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: minmax(min-content, max-content);
    }
  }
`

export const CalendarHeading = styled.span`
  font-size: 16px;
  margin: 36px 0 9px;
  display: inline-flex;

`

export const RepoIcon = styled(RiBookMarkLine)`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const Tab = styled.div`
  background: ${themes.primary};
  
  .content {
    display: flex;
    align-items: center;
    width: min-content;
    padding: 14px 16px;

    border-bottom: 2px solid ${themes.orange};
  }

  .label {
    font-size: 14px;
    padding: 0 7px;
    font-weight: 600;
  }

  .number {
    font-size: 12px;
    background: ${themes.ticker};
    padding: 2px 6px;
    border-radius: 24px;
  }

  .line {
    display: flex;
    width: 200vw;
    border: 1px solid ${themes.border};
    margin-left: -50vw;
  }

  &.mobile {
    margin-top: var(--verticalPadding);

    .content {
      margin: 0 auto;
    }

    @media(min-width: 768px) {
      display: none;
    }
  }

  &.desktop {
    display: none;

    @media(min-width: 768px) {
      display: unset;

      .wrapper {
        display: flex;
        margin: 0 auto;
        max-width: 1280px;
      }

      .offset {
        width: 25%;
        margin-right: var(--verticalPadding);
      }
    }
  }
`