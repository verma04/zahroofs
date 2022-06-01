import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 10rem;

  @media (min-width: 768px) {
      .flex {
          margin-bottom: 10rem;
           display: flex;
           justify-content: center;
           width: 70%;
           flex-direction: column;
           h1 {
            color: rgb(0, 133, 202);
            font-size:2rem;
           }
           h2 {
            color: rgb(0, 133, 202);
            font-size:1.5rem;
           }
   ul {
           li {
               list-style: circle;
               margin-top: 1rem;
           }
        }
  p {
      margin-top: 1rem;
  }
      }
   
  }

 

  @media (max-width: 767px) {
    .flex {
          margin-bottom: 10rem;
           display: flex;
           justify-content: center;
           width: 90%;
           flex-direction: column;
           h1 {
            color: rgb(0, 133, 202);
            font-size:2rem;
           }
           h2 {
            color: rgb(0, 133, 202);
            font-size:1.5rem;
           }
   ul {
           li {
               list-style: circle;
               margin-top: 1rem;
           }
        }
  p {
      margin-top: 1rem;
  }
      }
   
  }



  


  

`;
