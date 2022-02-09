import styled from "styled-components";

export const ServicesStyles = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  //align-items:center;
  color:white;
  margin:10px 20px 10px 20px;
  //background:black;
  animation: fadeInAnimation ease 3s;
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
  .intro{
      margin:10px;
      text-align:center;
      background: rgba(36, 34, 39,0.8);
      padding:15px;
      border-radius:10px;
      &>h1{
        color:red;
      }
    }
  .container{
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    
    .mapPic{
      border:1px ;
      margin:2px;
      width: 50vw;
      img{
        width:100%;
        height:100%;
        border-radius:10px;
      }
      
    }
    @media (max-width:980px) {
        flex-direction:column;
        .mapPic{
          width:auto;
        }
      }
    @media (max-width:330px) {
        justify-content:center;
        align-items:center;
      }
    .service-cards{
      display: grid;
      grid-gap:5px;
      margin:2px;
      grid-template-columns: 1fr 1fr;
      width: 30vw;
      @media (max-width:980px) {
        width: auto;
      }
      @media (max-width:380px) {
        grid-gap:2px;
        grid-template-columns: 1fr ;
      }
      &>div{
        background: white;
        color:black;
        display: flex;
        flex-direction:column;
        //justify-content:center;
        align-items:center;
        text-align:center;
        border: 2px solid ;
        border-radius:10px;
        padding: 10px;
      }
      @media (max-width:330px) {
        padding:2px;
      }
      .icons{
          display: flex;
          width: 8em;
          justify-content:space-around;
          margin:5px;
          //padding:10px;
        }
    }
  }
`