import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
 

 /* Used if the image is unavailable */
      /* You must set a specified height */
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover;
  position: relative;
  
  .category:hover {
    
    border-bottom: 5px solid #DBB42F;
  
   }
  @media (min-width: 1281px) {
    .section {
      background-image: url("https://app.zahroofvalves.com/wp-content/uploads/2021/11/Rectangle-2.png");
  background-repeat: no-repeat;
  background-size: cover;
   
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      height: 51em;
      display: flex;
      justify-content: center;
      flex-direction: column;
      .section-top {
         width: 70%;
         height: 40%;
         display: flex;
         justify-content: space-between;
         align-items: center;
         flex-direction: row;
   cursor: pointer;
  
         h2{
           font-size: 3rem;
           color:white
         }
         h3 {
           font-size: 2rem;
           color:white;
           text-align: center;
           text-transform: uppercase;
         }
      }
      .img-wrapper {

        position: relative;
        height: 60%;
        width: 100%;

      }

    
      }
    }
  
  

   
  @media (min-width: 1024px) and (max-width: 1280px) {
    .section {
      background-image: url("https://app.zahroofvalves.com/wp-content/uploads/2021/11/Rectangle-2.png");
  background-repeat: no-repeat;
  background-size: cover;
   
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      height: 42em;
      display: flex;
      justify-content: center;
      flex-direction: column;
      .section-top {
         width: 90%;
         height: 40%;
         display: flex;
         justify-content: space-between;
         align-items: center;
         flex-direction: row;
   cursor: pointer;
         h2{
           font-size: 3rem;
           color:white
         }
         h3 {
           font-size: 2rem;
           color:white;
           text-align: center;
           text-transform: uppercase;
         }
      }
      .img-wrapper {

        position: relative;
        height: 60%;
        width: 100%;

      }

    
      }
    }


    @media (min-width: 768px) and (max-width: 1023px) {
  
    }


    @media (max-width: 767px) {
      .section {
      background-image: url("https://app.zahroofvalves.com/wp-content/uploads/2021/11/Rectangle-2.png");
  background-repeat: no-repeat;
  background-size: cover;
   
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      height: 40em;
      display: flex;
      justify-content: center;
      flex-direction: column;
      .section-top {
         width: 90%;
         height: 70%;
         display: flex;
         justify-content: space-evenly;
         align-items: center;
         flex-direction: column;

        
   cursor: pointer;
         h2{
           font-size: 2rem;
           color:white
         }
         h3 {
           font-size: 1.5rem;
           color:white;
           text-align: center;
           text-transform: uppercase;
         }
      }
      .img-wrapper {

        position: relative;
        height: 60%;
        width: 100%;

      }

    
      }
    }



`;
