import React from "react";
import { useState } from "react";
import { notification } from "antd";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";
import {
  TextInput,
  FormHeader,
  SessionFrom,
  FormWrapper,
  TextWrap,
  ClickLink,
  LoginButtonContainer,
  BlockButtonLogin,
  TextLabel,
  CheckBoxField,
} from "../../shared";
// import ForgotPassword from "./ForgotPassword";
// import NewPassword from "./NewPassword";
// import { ConfirmAccountForm } from "./ConfirmAccountForm";
import { fetchUserInformation } from "../functions/fetchUserInformation";
import { logout } from "../../app/functions/logout";

const defaultValues = {
  username: "",
  password: "",
  rememberMe: false,
};

interface Props {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginForm = ({ setIsAuthenticated }: Props) => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({ defaultValues });
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmSignupMode, setIsConfirmSignupMode] = useState(false);
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);
  const [isForgotPassword, setForgetPasswordView] = useState(false);
  const [isNewPassword, setNewPassword] = useState(false);

  const rememberMe = watch("rememberMe");

  // const showForgetPassword = () => {
  //   setForgetPasswordView(true);
  // };

  // const showLogin = () => {
  //   setForgetPasswordView(false);
  //   setNewPassword(false);
  // };

  const onSubmit = async (data) => {
    setIsLoading(true);

    // localStorage.setItem("rememberMe", rememberMe.toString());

    // if (rememberMe) {
    //   setAppPersistentStorage({ storage: "localStorage" });
    // } else {
    //   setAppPersistentStorage({ storage: "sessionStorage" });
    // }

    try {
      await Auth.signIn(data.username, data.password);

      const { isAccountInitiated } = await fetchUserInformation();

      if (!isAccountInitiated) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      setIsLoading(false);
      logout().then();

      if (error.code === "UserNotConfirmedException") {
        setUsername(data.username);
        setPassword(data.password);

        setIsConfirmSignupMode(true);
      } else {
        notification.error({
          message: "Error",
          description:
            "The username or password you entered does not match our system record.",
        });
      }
    }
  };

  // if (isConfirmSignupMode) {
  //   return (
  //     <ConfirmAccountForm
  //       password={password}
  //       username={username}
  //       setIsConfirmSignupMode={setIsConfirmSignupMode}
  //     />
  //   );
  // }

  // if (isForgotPassword) {
  //   return (
  //     <ForgotPassword
  //       setForgetPasswordView={setForgetPasswordView}
  //       setNewPassword={setNewPassword}
  //       backToLogin={showLogin}
  //       setUsername={setUsername}
  //     />
  //   );
  // }

  // if (isNewPassword) {
  //   return (
  //     <NewPassword
  //       username={username}
  //       setUsername={setUsername}
  //       backToLogin={showLogin}
  //       setNewPassword={setNewPassword}
  //     />
  //   );
  // }

  return (
    <FormWrapper>
      <FormHeader>
        <div className="chameleon-logo-wrapper">
          <img
            alt="Chameleon Logo"
            width={307}
            height={36}
            src="/images/chameleon-logo-withtext.png"
          />
        </div>
        <h1 className="form-header-title">Log In</h1>
        <p className="form-header-subtitle -with-text-left">
          Welcome to Collective OS 1.0
        </p>
      </FormHeader>

      <SessionFrom onFinish={handleSubmit(onSubmit)} prefixCls="login-form">
        <TextLabel>Username</TextLabel>
        <TextInput
          className="text-input-box"
          disabled={isLoading}
          name="username"
          placeholder="Enter Username"
          size="large"
          control={control}
        />
        <TextLabel>Password</TextLabel>
        <TextInput
          className="text-input-box"
          disabled={isLoading}
          name="password"
          placeholder="Enter Password"
          password
          size="large"
          control={control}
        />

        <LoginButtonContainer>
          {/* <CheckBoxField
            errors={errors}
            name="rememberMe"
            label="Remember me"
            control={control}
            labelCol={{ span: 24 }}
          /> */}
          <BlockButtonLogin
            className="login-button"
            data-test="signin-submit"
            type="primary"
            htmlType="submit"
            size="large"
            loading={isLoading}
          >
            Log in
          </BlockButtonLogin>
        </LoginButtonContainer>

        {/* <TextWrap align="left">
          <ClickLink role="button" onClick={showForgetPassword}>
            Forgot Password?
          </ClickLink>
        </TextWrap> */}
      </SessionFrom>
    </FormWrapper>
  );
};
