import styled from "styled-components";

export const DropdownStyles = styled.div`
  position: absolute;
  color:white;
  display:flex;
  flex-direction:column;
  transform: translate(1px, 57px);
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
  
  &>span{
    background: blue;
    font-size:15px;
    padding:10px;
    cursor: pointer;
    &:hover{
      background-color: #3d4f7c;
    }
  }
  @media (max-width:600px) {
    transform: translate(1px, 57px);
  }
  @media (max-width:350px) {
    transform: translate(1px, 75px);
  }
`