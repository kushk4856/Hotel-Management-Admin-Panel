import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  /* font-size: 21px; */

  @media only screen and (max-width: 768px) {
    width: 85%;
    /* font-size: 16px; */
  }
`;

export default Input;
