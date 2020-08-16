import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
}
body{
  background: #030303;
  -webkit-font-smoothing:antialiased
}

body, input, button{
  font-family: Roboto, sans-serif
}

#root{

  padding:40px 0;
}
button{
  cursor:pointer;
}
`;
