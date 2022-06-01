import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .react-parallax {
      width: 100%;
    }

    .section3 {
      position: relative;
      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 40rem;

      /* Set a specific height */

      /* Create the parallax scrolling effect */
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      .middle {
        transition: all linear 1s;
        position: absolute;
        bottom: -3%;
        width: 40%;
        left: 31%;

        .img-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.5s;
        }
      }

      .left {
        transition: all linear 1s;
        position: absolute;
        height: 30%;
        top: 5%;
        width: 30%;
        left: -4%;

        .img-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }
      }

      .right {
        transition: all linear 1s;
        position: absolute;
        height: 30%;
        top: 5%;
        width: 35%;
        right: -4%;

        .img-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }
      }
      h2 {
        position: relative;
        text-transform: uppercase;
        font-size: 46px;
        line-height: 46px;
      }
      h2:after {
        position: absolute;
        content: "";
        display: block;
        width: 0.4rem;
        height: 70%;
        left: -1.4rem;
        top: 11%;

        background-color: #408f70;
      }

      .section3_left {
        position: absolute;
        top: 45%;
        left: 4.5%;
        width: 25%;

        /* height: 100%; */
        display: flex;
        justify-content: center;
        align-items: start;
      }
      .section3_right {
        position: absolute;
        top: 45%;
        right: 0%;
        width: 24%;

        /* height: 100%; */
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        a {
          margin-left: 8rem;
          margin-top: 25px;
          color: #222222;
          font-size: 30px;
          line-height: 28px;
          font-weight: 900;
         
          margin-left: 8rem;
          position: relative;

          &:before {
    content: ">";
    position: absolute;
   
    display: flex;
  
    align-items: center;
  
    justify-content: center;
    right: -20%;
    top: 0;
    opacity: 0;
    height: 100%;
    width: 40px;
    -webkit-transition: all 1s linear 0s;
    transition: all 0.2s linear 0s;
    font-size: 22px;
    font-weight: bold;
    }

    

    &:hover {
    text-indent: -20px;
    background-color: transparent;
    &:before {
        opacity: 1;
        text-indent: 0px;
    }
}
        }
      }
    }
    .section3-sm {
      display: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .react-parallax {
      width: 100%;
    }
    .section3 {
      display: none;
    }

    .section3-sm {
      position: relative;
      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 40rem;

      /* Set a specific height */

      /* Create the parallax scrolling effect */
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      .middle-1 {
        position: absolute;
        bottom: -3%;
        width: 40%;
        left: 31%;
        height: 88%;

        .img-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.5s;
        }
      }

      .left {
        position: absolute;
        height: 30%;
        top: 5%;
        width: 30%;
        left: -4%;

        .img-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }
      }

      .right {
        position: absolute;
        height: 30%;
        top: 5%;
        width: 30%;
        right: -4%;

        .img-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }
      }
      h2 {
        position: relative;
        text-transform: uppercase;
        font-size: 34px;
        line-height: 34px;
      }
      h2:after {
        position: absolute;
        content: "";
        display: block;
        width: 0.4rem;
        height: 70%;
        left: -1.4rem;
        top: 11%;

        background-color: #408f70;
      }

      .section3_left {
        position: absolute;
        top: 45%;
        left: 43px;
    width: 33%;
        /* height: 100%; */
        display: flex;
        justify-content: center;
        align-items: start;
      }
      .section3_right {
        position: absolute;
        
    top: 45%;
    right: 0%;
    
    width: 26%;


        /* height: 100%; */
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        a {
          margin-top: 25px;
          color: #222222;
          font-size: 30px;
          line-height: 28px;
          font-weight: 900;
          border-bottom: 1px solid black;
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .react-parallax {
      width: 100%;
    }

    .section3 {
      display: none;
    }



    .section3-sm {
      position: relative;
      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 30rem;

      /* Set a specific height */

      /* Create the parallax scrolling effect */
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      .middle-1 {
        position: absolute;
        bottom: -3%;
        width: 40%;
        left: 31%;
        height: 82%;

        .img-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.5s;
        }
      }

      .left {
        position: absolute;
        height: 30%;
        top: 5%;
        width: 30%;
        left: -4%;

        .img-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }
      }

      .right {
        position: absolute;
        height: 30%;
        top: 5%;
        width: 30%;

        right: -4%;

        .img-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }
      }
      h2 {
        position: relative;
        text-transform: uppercase;
        font-size: 2rem;
        line-height: 2rem;
      }
      h2:after {
        position: absolute;
        content: "";
        display: block;
        width: 0.4rem;
        height: 70%;
        left: -1.4rem;
        top: 11%;

        background-color: #408f70;
      }

      .section3_left {
        position: absolute;
        top: 45%;
        left: 5%;
        width: 30%;
        /* height: 100%; */
        display: flex;
        justify-content: center;
        align-items: start;
      }
      .section3_right {
        position: absolute;
        top: 45%;
        right: 5%;
        width: 30%;
        /* height: 100%; */
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        a {
          margin-top: 25px;
          color: #222222;
          font-size: 30px;
          line-height: 28px;
          font-weight: 900;
          border-bottom: 1px solid black;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .react-parallax {
      width: 100%;
    }

    .section3 {
      display: none;
    }

    .section3-sm {
      position: relative;
      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 20rem;

      /* Set a specific height */

      /* Create the parallax scrolling effect */
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      .middle-1 {
        position: absolute;
    bottom: -3%;
    width: 61%;
    left: 20%;
    height: 82%;

        .img-wrapper {
          width: 100%;
          height:100%;
          position: relative;
          transition: transform 0.5s;
        }
      }

      .left {
        position: absolute;
        height: 30%;
        top: 5%;
        width: 30%;
        left: -14%;

        .img-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }
      }

      .right {
        position: absolute;
        height: 30%;
        top: 5%;
        width: 30%;
        right: -14%;

        .img-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }
      }
      h2 {
        position: relative;
        text-transform: uppercase;
        font-size: 1rem;
        line-height: 46px;
      }
      h2:after {
        position: absolute;
        content: "";
        display: block;
        width: 0.4rem;
        height: 70%;
        left: -1.4rem;
        top: 11%;

        background-color: #408f70;
      }

      .section3_left {
        position: absolute;
        top: 10%;
      left:8%;
    width: 31%;

        /* height: 100%; */
        display: flex;
        justify-content: center;
        align-items: start;
      }
      .section3_right {
        position: absolute;
        top: 10%;
        right: 3%;
        width: 30%;
        /* height: 100%; */
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        a {
          margin-top: 10px;
          color: #222222;          
          border-bottom: 1px solid black;
         
        }
      }
    }
  }





  @media (max-width: 991px) and (orientation : landscape) {
    .section3-sm {
      h2 {
          font-size: 1.5rem;
          line-height: 1.2;
      }
      .section3_left {
        top: 30%;
      }
      .section3_right{
        top: 30%;
        right: 1%;
        a {
            font-size: 1.3rem;
            line-height: 1.1;
        }
      }

    }
  }


  @media (max-width: 768px) {
     .section3-sm {
       .section3_left {
          top: 25%;
      }
      .section3_right {
          top: 25%;
      }
     }
  }

  @media (max-width: 412px) {
    .section3-sm {
        h2 {
        font-size: 13px;
        line-height: 1.3;
      }
      .section3_left{
        top: 15%;
      }
      .section3_right {
        top: 15%;
          a {
          font-size: 13px;
          line-height: 1.3;
        }
      }
    }
  }


 

 
   

`;
