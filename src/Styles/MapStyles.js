import styled from 'styled-components'

export const MapStyles = styled.div`
  margin: 3px;
  top:0;
  bottom:0;
  left:0;
  right:0;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  .map-container {
    
    margin-top:1px;
    height: ${props=>props.mapsize[0]}vh;
    width: ${props=>props.mapsize[1]}vw;
    .mapboxgl-ctrl-geocoder{
      width: 10vw;
    }
    .mapboxgl-ctrl-geocoder--icon-search{
    position: relative;
    
    
  }
  }
  .geoc{
    width: 90vw;
    position: absolute;
  }
  
  .sidebar {
  background-color: rgba(35, 55, 75, 0.9);
  color: #fff;
  padding: 6px 12px;
  font-family: monospace;
  z-index: 1;
  text-align:center;
  bottom: 0;
  left: 0;
  margin: 12px;
  border-radius: 4px;
  }
`