/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 70%;
  height: 100%;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 3.2rem 4rem;
  transition: all 0.5s;

  @media only screen and (max-width: 768px) {
    padding: 1.2rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  /* backdrop-filter: blur(4px); */
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.4rem;
  left: 0.5rem;
  z-index: 2;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();

function MobileNavModal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);

  if (name !== openName) return null;
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>
        <div style={{ paddingTop: "18px" }}>
          {cloneElement(children, { onCloseModal: close })}
        </div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

MobileNavModal.Open = Open;
MobileNavModal.Window = Window;

export default MobileNavModal;
