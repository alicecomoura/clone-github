import styled from 'styled-components';
import { themes } from '../../styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;

  padding: 16px 20px 0 10px;

  border: 1px solid ${themes.border};
  border-radius: 6px;

  .wrapper {
    .scale-0 {
      fill: ${themes['calendar-scale-0']}
    }
    .scale-1 {
      fill: ${themes['calendar-scale-1']}
    }
    .scale-2 {
      fill: ${themes['calendar-scale-2']}
    }
    .scale-3 {
      fill: ${themes['calendar-scale-3']}
    }
    .scale-4 {
      fill: ${themes['calendar-scale-4']}
    }
    
    width: 893px;
  }

  span {
    font-size: 11px;
    color: ${themes.link};
    margin-top: -25px;
    margin-left: 7px;
    padding-bottom: 16px;

    align-self: flex-start;
  }
`;
