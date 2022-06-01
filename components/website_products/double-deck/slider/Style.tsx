import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
   
    div {
     
        width: 90%;
        height: 30rem;
        display: flex;
        justify-content: center;
   
       
        .img-wrapper {
            position: relative;
            width: 50%;
            height: 50%;
        }
    }
  }

  @media (max-width: 767px) {
    div {
     
     width: 90%;
     height: 30rem;
     display: flex;
     justify-content: center;

    
     .img-wrapper {
         position: relative;
         width: 50%;
         height: 50%;
     }
 }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    div {
     
     width: 90%;
     height: 30rem;
     display: flex;
     justify-content: center;

    
     .img-wrapper {
         position: relative;
         width: 50%;
         height: 50%;
     }
 }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    div {
     
     width: 90%;
     height: 20rem;
     display: flex;
     justify-content: center;

    
     .img-wrapper {
         position: relative;
         width: 50%;
         height: 50%;
     }
 }
  }

  
 


`;
