import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Heading from ".././ui/Heading";
import Logo from ".././ui/Logo";

const LoginLayout = styled.main`
  min-height: 100vh;
  margin: auto;
  display: grid;
  grid-template-columns: 48rem;
  overflow: hidden;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

  @media only screen and (max-width: 768px) {
    /* width: 70vw; */
  }
  @media only screen and (max-width: 426px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4"> Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
