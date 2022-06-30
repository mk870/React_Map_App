import styled from "styled-components";

export const ImageStyles = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  margin: 10px;
  .image1{
    height: 60vw;
    width: 50vw;
    min-width:300px;
    max-width:500px;
    min-height:200px;
    max-height:350px;
    border-radius: 20px;
    margin-bottom:10px;
  }
  span{
    font-size:15px;
    font-weight:bold;
    margin-bottom:10px;
  }
  .cities{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
  .city{
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    &>img{
      height: 8vw;
      width: 10vw;
      border-radius:10px;
      border: 1px solid white;
      min-height:80px;
      min-width:100px;
      max-height:180px;
      max-width:200px;
      margin-bottom:5px;
      &:hover{
        box-shadow: 0 0 25px white;
      }
    }
   
  }
  @media (max-width:460px) {
     .cities{
      grid-template-columns: 1fr 1fr;
      grid-gap:15px;
     }
     .city{
      &>img{
        height:110px;
        width:130px;
      }
     }
   }
`