import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}

  
   

  /* @media only screen and (max-width: 768px) {
    flex-direction: row;
    gap: 1.6rem;
  } */

  @media only screen and (max-width: 426px) {
    flex-direction: column;
    gap: 1.6rem;
  }
`;

Row.defaultProps = { type: "vertical" };

export default Row;
