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
   
       
      .section_top {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-image: url("https://app.zahroofvalves.com/wp-content/uploads/2021/10/ZAH-627_Gold-Texture_CMYK.png");
        background-position: center;
       background-size: cover;
        height: 15rem;

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        h2 {
          width: 80%;
          text-align: left;
          font-size: 2rem;
        }
        h3 {
          
          width: 80%;
          line-height: 30px;
          font-size: 24px;
          font-family: Proxima-Light;
        font-weight: 800;
        color: ${(props) => props.theme.colors.darkblue};
        }
      }

      .products {
        margin-top: 10%;
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
   
       
      .section_top {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-image: url("https://app.zahroofvalves.com/wp-content/uploads/2021/10/ZAH-627_Gold-Texture_CMYK.png");
        background-position: center;
       background-size: cover;
        height: 15rem;

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        h2 {
          width: 80%;
          text-align: left;
          font-size: 2rem;
        }
        h3 {
          
          width: 80%;
          line-height: 30px;
          font-size: 24px;
          font-family: Proxima-Light;
        font-weight: 800;
        color: ${(props) => props.theme.colors.darkblue};
        }
      }

      .products {
        margin-top: 10%;
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
   
       
      .section_top {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-image: url("https://app.zahroofvalves.com/wp-content/uploads/2021/10/ZAH-627_Gold-Texture_CMYK.png");
        background-position: center;
       background-size: cover;
        height: 15rem;

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        h2 {
          width: 80%;
          text-align: left;
          font-size: 2rem;
        }
        h3 {
          
          width: 80%;
          line-height: 30px;
          font-size: 24px;
          font-family: Proxima-Light;
        font-weight: 800;
        color: ${(props) => props.theme.colors.darkblue};
        }
      }

      .products {
        margin-top: 10%;
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
   
       
      .section_top {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-image: url("https://app.zahroofvalves.com/wp-content/uploads/2021/10/ZAH-627_Gold-Texture_CMYK.png");
        background-position: center;
       background-size: cover;
        height: 20rem;

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        h2 {
          width: 90%;
          text-align: left;
          font-size: 1.5em;
        }
        h3 {
          
          width: 90%;
          line-height: 30px;
          font-size: 16px;
          font-family: Proxima-Light;
        font-weight: 800;
        color: ${(props) => props.theme.colors.darkblue};
        }
      }

      .products {
        margin-top: 10%;
        width: 80%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    flex-wrap: wrap;
        .list {
          width: 100%;
          height: 15rem;
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
          padding-left: 2rem;
          padding-right: 2rem;
          border-left:  3px solid   ${(props) => props.theme.colors.blue};;
          border-right:  3px solid   ${(props) => props.theme.colors.blue};;
        }
          
        }
      }
    }
 
  }


  @media (max-width: 991px) and (orientation : landscape) {
    .section {
      .section_bottom {
        .section2_data {
          .section2_data_left {
            height: 65%;
            h2{
              margin-left: 7px;
            }
          }
          .section2_data_right{
            height: 65%;
          }
            
        }
      }
    }
  }


  @media (max-width: 414px) {
    .section {
      .section_bottom{
         .section2_data {
           .section2_data_left {
             h2{
               margin-left: 5px;
             }
             p{
                margin-top: 1rem;
             }
           }
         }
      }
    }
  }

`;
