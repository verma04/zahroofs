import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
   
      .head {
      width: 70%;
      height: 20rem;
      display: flex;
      justify-content: flex-start;
      align-items:center;
  
      h2 {
        text-transform:uppercase;
        font-size: 2rem;
        position: relative;
      }
      h2:after {
          position: absolute;
          width: 0.25rem;
          display: block;
          height: 100%;
          left: -10%;
          top: 0%;
          background:  ${(props) => props.theme.colors.blue};
          border-left: 1px white;
          content: "";
        }

      }

      .products {
        width: 80%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    flex-wrap: wrap;
        .list {
          width: 30%;
          height: 20rem;
          margin-bottom: 5rem;
       
          display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;

        .img-wrapper {
          position: relative;
          width: 100%;
          height: 70%;

        }

        h3 {
           font-size: 1.7rem;
           text-transform: uppercase;
           text-align: center;
          padding-left: 2rem;
          padding-right: 2rem;
          border-left:  3px solid   ${(props) => props.theme.colors.blue};;
          border-right:  3px solid   ${(props) => props.theme.colors.blue};;
        }
          
        }
      }

    
    }
  }

  @media (max-width: 767px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
   
      .head {
      width: 80%;
      height: 10rem;
      display: flex;
      justify-content: flex-start;
      align-items:center;
  
      h2 {
        text-transform:uppercase;
        font-size: 2rem;
        position: relative;
      }
      h2:after {
          position: absolute;
          width: 0.25rem;
          display: block;
          height: 100%;
          left: -10%;
          top: 0%;
          background:  ${(props) => props.theme.colors.blue};
          border-left: 1px white;
          content: "";
        }

      }

      .products {
        width: 80%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    flex-wrap: wrap;
        .list {
          width: 100%;
          height: 20rem;
          margin-bottom: 3rem;
       
          display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;

        .img-wrapper {
          position: relative;
          width: 100%;
          height: 70%;

        }

        h3 {
           font-size: 1.7rem;
           text-transform: uppercase;
           text-align: center;
          padding-left: 2rem;
          padding-right: 2rem;
          border-left:  3px solid   ${(props) => props.theme.colors.blue};;
          border-right:  3px solid   ${(props) => props.theme.colors.blue};;
        }
          
        }
      }

    
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
   
      .head {
      width: 80%;
      height: 20rem;
      display: flex;
      justify-content: flex-start;
      align-items:center;
  
      h2 {
        text-transform:uppercase;
        font-size: 2rem;
        position: relative;
      }
      h2:after {
          position: absolute;
          width: 0.25rem;
          display: block;
          height: 100%;
          left: -10%;
          top: 0%;
          background:  ${(props) => props.theme.colors.blue};
          border-left: 1px white;
          content: "";
        }

      }

      .products {
        width: 80%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    flex-wrap: wrap;
        .list {
          width: 30%;
          height: 20rem;
          margin-bottom: 5rem;
       
          display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;

        .img-wrapper {
          position: relative;
          width: 100%;
          height: 70%;

        }

        h3 {
           font-size: 1.7rem;
           text-transform: uppercase;
           text-align: center;
          padding-left: 2rem;
          padding-right: 2rem;
          border-left:  3px solid   ${(props) => props.theme.colors.blue};;
          border-right:  3px solid   ${(props) => props.theme.colors.blue};;
        }
          
        }
      }

    
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
   
      .head {
      width: 80%;
      height: 20rem;
      display: flex;
      justify-content: flex-start;
      align-items:center;
  
      h2 {
        text-transform:uppercase;
        font-size: 2rem;
        position: relative;
      }
      h2:after {
          position: absolute;
          width: 0.25rem;
          display: block;
          height: 100%;
          left: -10%;
          top: 0%;
          background:  ${(props) => props.theme.colors.blue};
          border-left: 1px white;
          content: "";
        }

      }

      .products {
        width: 80%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    flex-wrap: wrap;
        .list {
          width: 50%;
          height: 20rem;
          margin-bottom: 5rem;
       
          display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;

        .img-wrapper {
          position: relative;
          width: 100%;
          height: 70%;

        }

        h3 {
           font-size: 1.7rem;
           text-transform: uppercase;
           text-align: center;
          padding-left: 2rem;
          padding-right: 2rem;
          border-left:  3px solid   ${(props) => props.theme.colors.blue};;
          border-right:  3px solid   ${(props) => props.theme.colors.blue};;
        }
          
        }
      }

    
    }
  }

  
 


`;
