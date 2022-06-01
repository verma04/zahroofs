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
   background-image: url("https://app.zahroofvalves.com/wp-content/uploads/2021/08/rsukles8twyiyukry6ws.png");
  background-repeat: no-repeat;
  background-size: cover;
   
   height: 140px;
        p {
          width: 60%;
          line-height: 30px;
          font-size: 24px;
          font-family: Proxima-Light;

        color:  white;
        text-transform: uppercase;
     span {
      font-family: Proxima-Bold;
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
   background-image: url("https://app.zahroofvalves.com/wp-content/uploads/2021/08/rsukles8twyiyukry6ws.png");
  background-repeat: no-repeat;
  background-size: cover;
   
   height: 140px;
        p {
          width: 90%;
          line-height: 30px;
          font-size: 24px;
          font-family: Proxima-Light;

        color:  white;
        text-transform: uppercase;
     span {
      font-family: Proxima-Bold;
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
        background-color:  ${(props) => props.theme.colors.darkblue};
;
        height: 140px;
        p {
          width: 60%;
          line-height: 30px;
          font-size: 24px;
          font-family: Proxima-Light;

        color:  white;
        text-transform: uppercase;
     span {
      font-family: Proxima-Bold;
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
   background-image: url("https://app.zahroofvalves.com/wp-content/uploads/2021/08/rsukles8twyiyukry6ws.png");
  background-repeat: no-repeat;
  background-size: cover;
   
   height: 300px;
        p {
          width: 90%;
          line-height: 30px;
          font-size: 24px;
          font-family: Proxima-Light;

        color:  white;
        text-transform: uppercase;
     span {
      font-family: Proxima-Bold;
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
