/* eslint-disable react/prop-types */
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebarMobile = styled.aside`
  position: relative;
  top: 0%;
  left: 0%;
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 100%;
  /* height: 100vh; */
`;

const SidebarMobile = ({ onCloseModal }) => {
  return (
    <StyledSidebarMobile>
      <Logo />
      <MainNav onCloseModal={onCloseModal} />
    </StyledSidebarMobile>
  );
};

export default SidebarMobile;
