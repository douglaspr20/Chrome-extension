import styled from "styled-components";
import { Col, Form, Button, Card } from "antd";

export const SectionContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormHeader = styled.div`
  margin-bottom: 1rem;
  text-align: center;

  .chameleon-logo-wrapper {
    text-align: center;
    margin-bottom: 20px;
  }

  .form-header-title {
    margin: 0;
    font-size: 32px;
    font-weight: 700;
  }

  .form-header-text {
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    margin-bottom: 40px;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0;
  }

  .form-header-subtitle {
    margin: 0.2rem;
    font-size: 13px;
    font-weight: 400;
    color: #b2b2b2;
    letter-spacing: 1px;
  }
`;

export const SessionFrom = styled(Form)`
  .ant-input-affix-wrapper {
    border-radius: 4px;
    height: 48px;
    margin-bottom: 10px;
    background-color: rgba(255, 255, 255, 0.1);

    :hover,
    :focus {
      border-color: #ffb640 !important;
    }

    :focus {
      box-shadow: 0 0 0 2px rgb(249 155 23 / 20%) !important;
      outline: 0 !important;
    }
  }

  .ant-input-affix-wrapper > input.ant-input {
    font-size: 14px;
    border-radius: 4px;
  }

  .text-input-box,
  .ant-input-affix-wrapper {
    font-size: 14px;
    padding: 14px 16px;
    border-radius: 4px;
    height: 48px;
    background: #fefefe;

    :hover,
    :focus {
      border-color: #ffb640 !important;
    }

    :focus,
    :hover {
      box-shadow: 0 0 0 2px rgb(249 155 23 / 20%) !important;
      outline: 0 !important;
    }
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const FormWrapper = styled.div`
  max-width: 440px;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionWrapper = styled.div`
  width: 300px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWrap = styled("div")<{ align: string }>`
  padding-top: 0.4rem;
  text-align: ${(props) => props.align};

  span {
    cursor: pointer;
  }

  span:hover {
    color: #f99b17;
  }
`;

export const ClickLink = styled.span`
  color: #455fe5;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`;

export const LoginButtonContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
`;

export const BlockButtonLogin = styled(Button)`
  background: none;
  text-align: center;
  width: 100%;
  height: 47px;
  color: #323232;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  border-radius: 4px;
  border: 2px solid #f99b17;
  margin-left: auto;
  margin-right: auto;

  :hover,
  :active,
  :focus {
    background-color: #ffb640;
    border-color: #ffb640;
  }
`;

export const ButtonLogout = styled(Button)`
  :hover,
  :active,
  :focus {
    border-color: #ffb640;
    color: #ffb640;
  }
`;

export const TextLabel = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #b2b2b2;
  margin-bottom: 5px;
`;

export const AppContentCard = styled(Card)`
  margin: 32px auto;
  width: 100%;
  max-width: 1160px;
  background-color: transparent;
  border: none;

  .ant-card-body {
    padding: 0;
    position: relative;
  }

  .floating-action {
    position: absolute;
    right: 10px;
    bottom: 30px;
  }

  &.single-user_wrapper .ant-btn-link {
    padding: 0;
    margin-bottom: 32px;
    font-size: 18px;
    background-color: transparent;
  }
`;
