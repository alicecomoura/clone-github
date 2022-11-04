import { createGlobalStyle } from 'styled-components'

import { themes } from './themes'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    background: ${themes.primary};
  }

  *, input {
    border: 0;
    background: none;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    color: ${themes.black};
  }

  ul {
    list-style: none;
  } 
`