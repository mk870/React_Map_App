import styled from "styled-components";

export const FooterStyles = styled.footer`
  display:flex;
  align-items:center;
  justify-content:space-around;
  flex-direction:row;
  background: rgba(36, 34, 39,0.8);
  bottom: 0;
  left:0;
  right:0;
  @media (max-width:460px) {
    flex-direction:column;
    align-items:center;
  }
  
`