# React Map App (NextGenMaps) 
<img src="https://i.ibb.co/ByGb3HJ/Next-Gen-Maps.png" alt="Next-Gen-Maps" border="0">
This application allows a user to find directions, distance and different types of maps of any location on the globe.

## **Project Summary**
* Created 4 pages using react-router (homepage, services,map and settings page)
* Used mapbox-gl Api to allow client to load a map on the application.
* Used mapbox-gl-infobox and mapbox-directions to provide distance,direction and average time travelled between locations.

* Also used useEffect hook to update the map as user drags, adjusts the map and also interactes with the map settings.
* Finally used styled-components to style the entire application.

### **Resources Used**
***
**React Version**: 17.0.2  
**Languange used**: Javascript

**Packages**: mapbox-gl, react-map-gl-geocoder, mapbox-gl-infobox, react-icons, mapbox-gl-controls, react-router-dom , mapbox/mapbox-gl-directions and styled-components    
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)

**Run app locally (Run)**: git clone (the url to the GitHub repo) then  npm install

**APIs**: React Context-Api, mapbox-gl Api

### **Map Display**
***
Used UseRef hook to paint the map from the mapbox Api onto the application.  
The application will request the user's location so as to automatically show their map location once they navigate to the map page.  
Used useEffect hook to allow the user to drag the map so as to navigate around.  
User has access to the latitute,altitude and zoomlevel of the seached location.  
<img src="https://i.ibb.co/M73x3c0/Next-Gen-Maps-1.png" alt="Next-Gen-Maps-1" border="0">


### **Map Manipulation**
***
After Displaying the map, the user can mapulate the map on the settings dropdown from the navbar with the following options:

* ### Changing mapstyles:   
 **Satellite Style**  
<img src="https://i.ibb.co/DLzL5FH/Next-Gen-Maps-2.png" alt="Next-Gen-Maps-2" border="0" width="290">  
 **Street Satellite Style**  
<img src="https://i.ibb.co/G5b5sBb/Next-Gen-Maps-4.png" alt="Next-Gen-Maps-4" border="0" width="290">  
**Dark Style**  
<img src="https://i.ibb.co/9gfyWjx/Next-Gen-Maps-3.png" alt="Next-Gen-Maps-3" border="0" width="290">  
**Light Style**,**Navigation Style (Night and Day)** and **Outdoor Style**
* ### Map-Size: **Large**, **Medium** and **Small**

### **Map Directions**
***
* Used mapbox-directions to give the user the ability to search 2 places and get directions including distance,time taken to travel given 3 modes of transport(driving, walking and cycling) and traffic.  
<img src="https://i.ibb.co/kyKjhBq/Next-Gen-Maps-5.png" alt="Next-Gen-Maps-5" border="0">

### **Productionization**
***
In this step, I ran the npm run build command to build the application for production and deployed it on netlify.  
**Live Application**: [NextGenMaps](https://nextgenmaps.netlify.app)
