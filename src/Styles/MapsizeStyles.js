import styled from "styled-components";

export const MapsizeStyles = styled.div`
  position: absolute;
  color:white;
  display:flex;
  flex-direction:column;
  transform: translate(-90px, -29px);
  z-index:300;
  animation: fadeInAnimation ease 1s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;

    @keyframes fadeInAnimation {
      0%{
          opacity: 0;
        }
      100%{
        opacity: 1;
        }
    }
  .normal{
    background: grey;
    padding:10px;
    cursor: pointer;
    &:hover{
      background-color: #3d4f7c;
    }
  }
  .clicked{
    background-color: blue;
    padding:10px;
    cursor: pointer;
    
  }
  
  
  @media (max-width:480px) {
    transform: translate(-90px, -29px);
  }
  @media (max-width:350px) {
    transform: translate(-90px, -47px);
  }
`