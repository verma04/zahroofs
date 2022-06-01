import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media  (min-width: 1600px) {


    .flex {
        display: flex;
        justify-content: center;
       margin-bottom: 5rem;
        align-items: center;
        flex-direction: column;
        width: 90%;
        
        .head {
            width: 100%;
            height: 5rem;
            justify-content: flex-start;
     display: flex;
        align-items: center;
        flex-direction: row;

        .img-wrapp {
            width: 20%;
            height: 90%;
            position: relative;
        }

        .text {
            margin-left: 1rem;
        }

        }

        .img {
            justify-content: flex-start;
       display: flex;
        align-items: center;
    margin-bottom: 2rem;
        flex-wrap: wrap;
            .img-wrapper {
             
                margin-top: 1rem;
                position: relative;
            width: 10rem;
            height: 10rem;
            justify-content: center;
       display: flex;
        align-items: flex-start;
        margin-left: 1rem;
      
        }
        }
    }
}

@media (min-width: 1281px) and (max-width: 1600px) {

  
    .flex {
        display: flex;
        justify-content: center;
       margin-bottom: 5rem;
        align-items: center;
        flex-direction: column;
        width: 90%;
        
        .head {
            width: 100%;
            height: 5rem;
            justify-content: flex-start;
     display: flex;
        align-items: center;
        flex-direction: row;

        .img-wrapp {
            width: 20%;
            height: 90%;
            position: relative;
        }

        .text {
            margin-left: 1rem;
        }

        }

        .img {
            justify-content: flex-start;
       display: flex;
        align-items: center;
    margin-bottom: 2rem;
        flex-wrap: wrap;
            .img-wrapper {
             
                margin-top: 1rem;
                position: relative;
            width: 10rem;
            height: 10rem;
            justify-content: center;
       display: flex;
        align-items: flex-start;
        margin-left: 1rem;
      
        }
        }
    }

     
    
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    .flex {
        display: flex;
        justify-content: center;
       margin-bottom: 5rem;
        align-items: center;
        flex-direction: column;
        width: 90%;
        
        .head {
            width: 100%;
            height: 5rem;
            justify-content: flex-start;
     display: flex;
        align-items: center;
        flex-direction: row;

        .img-wrapp {
            width: 20%;
            height: 90%;
            position: relative;
        }

        .text {
            margin-left: 1rem;
        }

        }

        .img {
            justify-content: flex-start;
       display: flex;
        align-items: center;
    margin-bottom: 2rem;
        flex-wrap: wrap;
            .img-wrapper {
             
                margin-top: 1rem;
                position: relative;
            width: 10rem;
            height: 10rem;
            justify-content: center;
       display: flex;
        align-items: flex-start;
        margin-left: 1rem;
      
        }
        }
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .flex {
        display: flex;
        justify-content: center;
       margin-bottom: 5rem;
        align-items: center;
        flex-direction: column;
        width: 90%;
        
        .head {
            width: 100%;
            height: 5rem;
            justify-content: flex-start;
     display: flex;
        align-items: center;
        flex-direction: row;

        .img-wrapp {
            width: 20%;
            height: 90%;
            position: relative;
        }

        .text {
            margin-left: 1rem;
        }

        }

        .img {
            justify-content: flex-start;
       display: flex;
        align-items: center;
    margin-bottom: 2rem;
        flex-wrap: wrap;
            .img-wrapper {
             
                margin-top: 1rem;
                position: relative;
            width: 10rem;
            height: 10rem;
            justify-content: center;
       display: flex;
        align-items: flex-start;
        margin-left: 1rem;
      
        }
        }
    }
  }
  @media (max-width: 767px) {
    .flex {
        display: flex;
        justify-content: center;
       margin-bottom: 5rem;
        align-items: center;
        flex-direction: column;
        width: 90%;
        
        .head {
            width: 100%;
            height: 5rem;
            justify-content: flex-start;
     display: flex;
        align-items: center;
        flex-direction: row;

        .img-wrapp {
            width: 20%;
            height: 90%;
            position: relative;
        }

        .text {
            margin-left: 1rem;
        }

        }

        .img {
            justify-content: center;
       display: flex;
        align-items: center;
    margin-bottom: 2rem;
        flex-wrap: wrap;
        width: 100%;
            .img-wrapper {
             
                margin-top: 1rem;
                position: relative;
            width: 43%;
            height: 10rem;
            justify-content: space-around;
       display: flex;
        align-items:space-evenly;
    
      
        }
        }
    }
  }

  @media (max-width: 991px) and (orientation : landscape) {
    .section4 {
      .section4_mid {
        .section4_mid_left {
          
          .img_wrapper {
            .text-2 {
              left: 15%;
          }
          .text-1 {
              right: 15%;
          }
          }
        }
        .section4_mid_right {
          h2{
            margin-left: 2rem;
          }
        }
      }
      .section4_bottom{
        .section4_bottom_data {
          .section4_mid_left {
            height: 40%;
            
          }
        }
      }
    }
  }


  

  @media (max-width: 414px) {
    .section4 {
       .section4_mid {
         .section4_mid_left {
           .top{
              h2 {
                margin-left: 1rem;
              }
           }
         }
         .section4_mid_right {
           h2{
            
           }
         }
       }
       .section4_bottom_data{
         .section4_mid_left {
           .top{
              h2 {
                margin-left: 1rem;
                margin-bottom: 10px;
              }
           }
         }
       }
     }
  }

  @media (max-width: 375px) {
    .section4 {
      .section4_top {
         .section4_top_data {
           h2 {
             font-size: 1.3rem;
           }
         }
       }
       .section4_mid {
         .section4_mid_left {
         }
         .section4_mid_right {
           h2{
              font-size: 1.3rem;
              margin-left: 2rem;
           }
           p{
             font-size: 16px;
           }
         }
       }
     }
  }

  @media (max-width: 360px) {
    .section4 {
      .section4_top {
         .section4_top_data {
           h2 {
             font-size: 1.3rem;
           }
         }
       }
       .section4_mid {
         .section4_mid_left {
         }
         .section4_mid_right {
           h2{
              font-size: 1.2rem;
               margin-left: 2rem;
           }
           p{
             font-size: 15px;
           }
         }
       }
     }
  }



`;
