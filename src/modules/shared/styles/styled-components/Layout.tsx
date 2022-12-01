import styled from "styled-components";
import { Header } from "antd/lib/layout/layout";
import { Button, Card, Input, Menu } from "antd";

export const TopBarWrapper = styled(Header)`
  padding: 0;
  background-color: #323232;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MiniProfileWrapper = styled.div`
  text-rendering: optimizeLegibility;
  font-style: normal;
  padding: 20px 15px;
  margin-top: 10px;
  background: #ffffff;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
  .ant-card-body {
    padding: 0;
  }
  .ant-typography {
    display: block;
  }
  .centered-data h5 {
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 1px;
    margin-top: 10px;
  }
  .centered-data .ant-typography span {
    font-size: 12px !important;
    line-height: 100%;
    letter-spacing: 1px;
    font-weight: 400 !important;
  }
  .profile-link {
    margin-top: 10px;
    font-size: 13px;
    line-height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    border: 1px solid #b2b2b2;
    border-radius: 4px;
  }
`;

export const MiniProfileNav = styled(Menu)`
  margin-top: 20px;
  background: #ffffff;
  border: none;
  border-top: 0.5px solid #eeeeee;
  margin-bottom: 10px;

  .ant-select-single {
    float: right;
  }
  .ant-menu-item {
    border-bottom: 0.5px solid #eeeeee;
    padding: 0;
  }
  .ant-menu-item-selected {
    background: none !important;
  }
  .ant-select-selector {
    border: none !important;
    margin-top: 5px;
  }
`;

export const ContentCard = styled(Card)`
  padding: 48px 64px;
  margin: 32px auto;
  width: 100%;
  max-width: 1160px;
  //box-shadow: ${(props) => props.theme.dropShadows.ds1};
  background-color: #ffffff;
  border: none;

  .ant-card-body {
    padding: 0;
    position: relative;
  }
  .create-company__header {
    padding: 0;
  }
`;

export const FormContentCard = styled(ContentCard)`
  //background-color: #fafafa;
`;

export const SearchInputBox = styled(Input)<{
  $width: string;
  $textColor: string;
}>`
  width: ${(props) => props.$width};
  height: 40px;
  background-color: transparent;
  margin-left: 20px;
  border-color: white;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-radius: 0;

  :hover {
    border-right: none;
    border-color: white !important;
  }

  .ant-input {
    font-size: 16px;
    background-color: transparent;
    color: ${(props) => props.$textColor};
  }

  &.ant-input-affix-wrapper-focused {
    border-right: none;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .search-icon {
    padding-right: 5px;
  }
`;

export const SearchBoxWrapper = styled(Button)`
  margin: 5px;
  width: 30%;
  display: flex;
  align-items: center;
  padding: 10px;
  border: none;
  background-color: transparent;
  :hover {
    background-color: transparent;
    box-shadow: none;
  }
  :focus {
    background-color: transparent;
    box-shadow: none;
  }
  :active {
    box-shadow: none;
  }
  .searchTextWrapper {
    padding: 15px;
    margin: 10px;
    color: white;
    width: 100%;
    height: 35px;
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;
  }
`;
