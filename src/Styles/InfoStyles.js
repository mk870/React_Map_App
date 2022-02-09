import styled from "styled-components";

export const InfoStyles = styled.div`
  z-index:100;
  background: rgba(36, 34, 39,0.8);
  display: flex;
  flex-direction: column;
  align-items:center;
  margin:10px;
  padding: 15px 5px 15px 5px;
  border-radius:15px;
  justify-content:center;
  align-items:center;
  text-align:center;
  width:50vw;
  min-width:300px;
  max-width:500px;
  &>ul{
    text-align:left;
  }
  
  .header{
    font-weight:bold;
    font-size:20px;
    margin-bottom: 5px;
  }
  .second-header{
    font-weight:bold;
    font-size:15px;
    margin-bottom: 5px;
  }
  .image2{
    height: 30vw;
    width: 30vw;
    min-width:250px;
    min-height:250px;
    max-width:480px;
    max-height:520px;
    border-radius: 20px;
  }
`