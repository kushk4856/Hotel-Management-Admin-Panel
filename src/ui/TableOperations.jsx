import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }

  @media only screen and (max-width: 768px) {
    /* flex-direction: column; */
    align-items: flex-end;
  }
  @media only screen and (max-width: 426px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default TableOperations;
