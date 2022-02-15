import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`

export const Container = styled.div`
  z-index:1;
  width:100%;
  max-width:1300px;
  margin-right:auto;
  margin-left:auto;
  padding-right:50px;
  padding-left:50px;
`;

export const Typography = styled.h1`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : ''};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : 'normal')};
  color: ${(props) => (props.color ? props.color : '#121212')};
`;

export default GlobalStyle;