import React from "react";
import { LoginForm } from "../../modules/session";
import { SectionContainer } from "../../modules/shared";

interface Props {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setIsAuthenticated }: Props) => {
  return (
    <SectionContainer>
      <LoginForm setIsAuthenticated={setIsAuthenticated} />
    </SectionContainer>
  );
};

export default Login;
