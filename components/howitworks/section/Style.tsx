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
        background-color:  ${(props) => props.theme.colors.blue};
     
        height: 140px;
        h3 {
          width: 80%;
          line-height: 30px;
          font-size: 24px;
          font-family: Proxima-Light;
        font-weight: 800;
        color: ${(props) => props.theme.colors.darkblue};
        }
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 700px;
        position: relative;

        .section2_data {
          width: 80%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          .section2_data_left {
            display: flex;
            width: 48%;
            height: 100%;
            justify-content: flex-start;
            align-items: left;
            flex-direction: column;
            h2 {
              margin-top: 100px;
              position: relative;
              padding-left: 0.5rem;
              font-size: 55px;
              color: white;
              position: relative;
            }
            h2:after {
              position: absolute;
              content: "";
              display: block;
              height: 120%;
              width: 0.3rem;
              top: 0;
              left: -0.3rem;
              background-color: ${(props) => props.theme.colors.blue} ;
            }
            p {
              margin-top: 52px;
              color: white;
              width: 100%;
              line-height: 1.4;
              font-size: 20px;
            }
            h3 {
             
              line-height: 1.4;
              color: white;
            }
          }

          .section2_data_right {
            display: flex;
            width: 48%;
            height: 80%;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            position: relative;
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
        background-color:  ${(props) => props.theme.colors.blue};
        height: 140px;
        h3 {
          width: 85%;
          line-height: 30px;
          font-size: 24px;
          color: ${(props) => props.theme.colors.darkblue};
        }
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 700px;
        position: relative;

        .section2_data {
          width: 90%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          .section2_data_left {
            display: flex;
            width: 48%;
            height: 100%;
            justify-content: flex-start;
            align-items: left;
            flex-direction: column;
            h2 {
              margin-top: 90px;
              position: relative;
              padding-left: 0.5rem;
              font-size: 55px;
              color: white;
              position: relative;
            }
            h2:after {
              position: absolute;
              content: "";
              display: block;
              height: 120%;
              width: 0.2rem;
              top: 0;
              left: -0.3rem;
              background-color: #daaf1a;
            }
            p {
           
              color: white;
              width: 100%;
              line-height: 1.4;
              font-size: 20px;
              margin-top: 1rem;
            }
            h3 {
           
              line-height: 1.4;
              color: white;
            }
          }

          .section2_data_right {
            display: flex;
            width: 48%;
            height: 80%;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            position: relative;
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
        background-color:  ${(props) => props.theme.colors.blue};
        height: 140px;
        h3 {
          width: 90%;
          line-height: 24px;
          font-size: 16px;
          color: ${(props) => props.theme.colors.darkblue};
        }
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 685px;
        position: relative;

        .section2_data {
          width: 95%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          .section2_data_left {
            display: flex;
            width: 48%;
            height: 100%;
            justify-content: space-evenly;
            align-items: left;
            flex-direction: column;
            h2 {
              
              position: relative;
              padding-left: 0.5rem;
              font-size: 55px;
              color: white;
              position: relative;
            }
            h2:after {
              position: absolute;
              content: "";
              display: block;
              height: 120%;
              width: 0.2rem;
              top: 0;
              left: -0.3rem;
              background-color: #daaf1a;
            }
            p {
            
              color: white;
              width: 100%;
              line-height: 1.4;
              font-size: 20px;
            }
            h3 {
              
              line-height: 1.4;
              color: white;
            }
          }

          .section2_data_right {
            display: flex;
            width: 48%;
            height: 80%;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            position: relative;
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
        background-color:  ${(props) => props.theme.colors.blue};
        height: 200px;
        h3 {
          width: 90%;
          line-height: 1.3;
          font-size: 18px;
          color: ${(props) => props.theme.colors.darkblue};
          font-weight: 600;
          font-family: 'Proxima-Light';
        }
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 47rem;
        position: relative;
       

        .section2_data {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction:column-reverse;
          align-items: center;
          position: absolute;
          .section2_data_left {
            margin-top: 1rem;
            display: flex;
            width: 90%;
            height: 65%;
            justify-content: flex-start;
            align-items: left;
            flex-direction: column;
            h2 {
          
              position: relative;
              padding-left: 0.5rem;
              font-size: 34px;
              color: white;
              position: relative;
            }
            h2:after {
              
              position: absolute;
              content: "";
              display: block;
              height: 120%;
              width: 0.2rem;
              top: 0;
              left: -0.3rem;
              background-color: #daaf1a;
            }
            p {
              margin-top: 0.5rem;
              color: white;
              width: 100%;
              line-height: 1.3;
              font-size: 18px;
              font-weight: 600;
            }
            h3 {
            
              line-height: 1.4;
              color: white;
            }
          }

          .section2_data_right {
            display: flex;
            width: 100%;
            height: 30%;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            position: relative;
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
