import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .aboutus {
      position: relative;
      height: 30rem;
      width: 100%;
      z-index: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      position: relative;
      margin-bottom: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .aboutus_section {
        display: flex;
        justify-content: center;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        width: 80%;
        height: 100%;

        h2 {
          text-align: left;
          width: 100%;
          position: relative;
          font-size: 1.7rem;
          text-transform: uppercase;
        }
        h2:after {
          position: absolute;
          width: 0.25rem;
          display: block;
          height: 100%;
          left: -1%;
          top: 0%;
          background:  ${(props) => props.theme.colors.blue};
          border-left: 1px white;
          content: "";
        }
        p {
          text-align: left;
          width: 100%;
        }
      }
    }
  }
`;
