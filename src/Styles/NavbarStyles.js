import styled from "styled-components";

export const NavbarStyles = styled.nav`
  display: flex;
  flex-direction:row;
  justify-content:space-around;
  background: rgba(36, 34, 39,0.8);
  font-family: 'Poppins',Verdana, Geneva, Tahoma, sans-serif;
  left:0;
  right: 0;
  top:0;
  overflow-x: hidden;
  
  .logo{
    display: flex;
    flex-direction:row;
    justify-content:space-around;
    align-items: center;
    
    h4{
      color: blue;
      font-weight:bold;
      font-size:20px;
      margin-left:5px;
    }
  }
  .info{
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
    color:white;
    width:380px;
    &>span{
      padding:1em 2.5em;
      cursor: pointer;
      padding: 10px;
      border-radius: 10px;
      text-align:center;
      display: flex;
      align-items:center;
      justify-content:center;
      &:hover{
        background-color: #3d4f7c;
    }
  }
  }
  @media (max-width:590px) {
    flex-direction:column;
    align-items:center;
    .info{
      width:95%;
      
    }
  }
`