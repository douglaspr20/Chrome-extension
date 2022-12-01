import styled from 'styled-components';
import { Button, Collapse, Form, PageHeader, Row, Tabs } from 'antd';

const { TabPane } = Tabs;
const { Panel } = Collapse;

export const TabWrapper = styled(Tabs)`
  border: none;
  overflow: visible;

  .ant-tabs-nav-wrap {
    padding: 40px 14px 10px 14px;
  }

  .ant-tabs-nav {
    margin-right: 30px;
    background: ${(props) => props.theme.colors.grey100};
    box-shadow: ${(props) => props.theme.dropShadows.ds2};
    border-radius: 4px;
    flex-direction: ${(props) => props.direction};
    max-width: 280px;
  }

  .ant-tabs-ink-bar {
    display: none;
  }

  .ant-tabs-nav-list .ant-tabs-tab {
    font-size: 16px;
    padding: 12px 20px;
    text-align: left;
    min-width: 240px;
    margin-bottom: 15px !important;
    background: ${(props) => props.theme.colors.white};
    color: #979797;
    box-shadow: ${(props) => props.theme.dropShadows.dsMaterial};
    border-radius: 4px;
  }

  .ant-tabs-nav-list .ant-tabs-tab {
    background: ${(props) => props.theme.colors.grey100};
    transition: background-color 1s ease;
  }

  .ant-tabs-nav-list .ant-tabs-tab.ant-tabs-tab-active {
    background-color: #323232;
    color: #fff;
    transition: background-color 1s ease;
  }

    .ant-tabs-nav-wrap {
      padding: 20px 14px 10px 14px;
      background: #fafafa;

      .ant-tabs-ink-bar {
        display: none;
      }

      .ant-tabs-nav-list .ant-tabs-tab {
        padding: 10px 20px;
        text-align: left;
        min-width: 240px;
        margin-bottom: 5px !important;
        background: ${(props) => props.theme.colors.white};
        box-shadow: 0 8px 12px rgb(0 0 0 / 6%);
        border-radius: 4px;
        font-size: 14px;
        color: #323232;
        font-weight: 400;
        transition: background-color 1s ease;
      }

      .ant-tabs-nav-list .ant-tabs-tab.ant-tabs-tab-active {
        background-color: #323232;
        //color: #fff;
        transition: background-color 1s ease;
      }

      .ant-tabs-nav-list .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: #fff;
      }
    }

    .ant-tabs-extra-content {
      .ant-tabs-nav {
        margin: 0;
      }

      .ant-tabs-nav-wrap {
        padding: 15px 15px 0 15px;
        background: #fafafa;
        width: 100%;

        .ant-tabs-nav-list {
          display: block;
          width: 100%;
          border-bottom: 1px solid #dddddd;
        }

        .ant-tabs-nav-list .ant-tabs-tab {
          width: 50%;
          font-size: 16px;
          padding: 0;
          text-align: left;
          min-width: 0;
          margin-bottom: 0 !important;
          background-color: blueviolet;
          color: #323232;
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.06);
          border-radius: 4px;
        }

        .ant-tabs-nav-list .ant-tabs-tab {
          background: ${(props) => props.theme.colors.grey100};
          transition: background-color 1s ease;
          box-shadow: none;
        }

        .ant-tabs-tab-btn {
          text-align: center;
          width: 100%;
          color: #666;
          padding: 5px;
          box-shadow: none;
        }

        .ant-tabs-nav-list .ant-tabs-tab.ant-tabs-tab-active {
          background: ${(props) => props.theme.colors.grey100};
          transition: background-color 1s ease;

          box-shadow: none;

          .ant-tabs-tab-btn {
            color: #f99b17 !important;
          }
        }

        .ant-tabs-nav-list .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #fff;
        }
      }

      .ant-tabs-ink-bar {
        display: block;
      }
    }
  }

  .ant-tabs-content-holder {
    background-color: transparent;
    margin: 0 6px;
    border: none;
  }

  .ant-tabs-extra-content {
    align-self: stretch;
  }

  &.settings-tab .ant-tabs-nav-list .ant-tabs-tab {
    height: 38px;
    font-size: ${(props) => props.theme.typography.bodyText};
    min-width: 190px;
  }

  &.settings-tab .ant-tabs-nav-list .ant-tabs-tab .anticon {
    font-size: 18px !important;
  }
`;

export const TabItem = styled(TabPane)`
  position: relative;
  padding: 40px 60px !important;
  background: ${(props) => props.theme.colors.grey100};
  box-shadow: ${(props) => props.theme.dropShadows.dsMaterial};
  &.profile-wrapper {
    background: ${(props) => props.theme.colors.grey100};
    box-shadow: ${(props) => props.theme.dropShadows.dsMaterial};
  }

  .ant-input-search {
    max-width: 240px;
    margin: 20px 0 32px;
  }

  .ant-input-search .ant-input-affix-wrapper {
    border-radius: 4px;
    height: 40px;
  }

  .ant-input-search .ant-input-group-addon {
    display: none;
  }
`;

export const BorderedRow = styled(Row)`
  padding: 10px 20px;

  .ant-col-18,
  .tab-header-border {
    border: none;
  }
`;

export const TabTile = styled(PageHeader)`
  padding: 0;

  .ant-page-header-heading-left {
    display: block;
    width: 100%;
  }

  .ant-page-header-heading-title {
    display: block;
  }

  .ant-page-header-heading-sub-title {
    display: block;
    padding-bottom: 10px;
    color: #000000;
  }
`;

export const RoleSwitchForm = styled(Form)`
  padding: 10px 0;
`;

export const CollapseRow = styled(Collapse)`
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const CollapseColumn = styled(Panel)`
  border-bottom: none !important;
  margin-bottom: 20px;
  padding: 20px;

  .ant-collapse-header,
  .ant-collapse-content {
    background-color: #f2f2f2 !important;
    border-radius: 4px;
  }

  .ant-collapse-header {
    font-weight: 700;
    margin-bottom: -6px;
  }
`;

export const SaveSettings = styled(Button)`
  float: ${(props) => (props.alignment ? props.alignment : 'left')};
  margin-top: 5px;
  margin-right: 5px;
`;

export const SearchDropDown = styled.div`
  .ant-form-item {
    margin-bottom: 0;
    width: ${(props) => props.width || '100%'};
  }

  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 48px;
  }

  .ant-select-single .ant-select-selector .ant-select-selection-item,
  .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    line-height: 46px !important;
    color: #666666 !important;
    font-weight: 700;
  }
`;

export const SavePermissionWrapper = styled(Row)`
  margin-top: 30px;
  justify-content: flex-end;
`;
