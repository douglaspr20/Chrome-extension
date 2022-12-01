import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;
const { ItemGroup } = Menu;

export const SideBarWrapper = styled(Sider)`
  background-color: #141414 !important;
  z-index: 9;
  width: 220px !important;
  max-width: 220px !important;
  flex: 0 0 220px !important;

  .app-title {
    padding: 10px !important;
    text-align: center;
    height: 72px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background-color: #141414 !important;

    a {
      color: #fff;
    }

    &:hover {
      background-color: #141414 !important;
    }
  }

  .ant-layout-sider,
  .ant-menu-sub,
  .ant-menu-dark {
    background: #141414 !important;
  }

  .ant-menu-submenu .ant-menu-item a {
    color: rgba(256, 256, 256, 0.7) !important;
    font-size: ${(props) => props.theme.typography.bodyText};
  }

  .anticon svg,
  .ant-menu-item-icon {
    width: 18px;
  }
`;

export const SideMenuWrapper = styled(ItemGroup)`
  .ant-menu-item,
  .ant-menu-submenu {
    margin-bottom: 8px !important;
    margin-top: 8px !important;
    position: relative;
    padding-bottom: 0 !important;
    padding-top: 0 !important;
  }
  .ant-menu-sub.ant-menu-inline > .ant-menu-item,
  .ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    height: 48px !important;
    line-height: 48px !important;
  }
  .ant-menu-submenu-title,
  .ant-menu-item {
    height: 48px;
  }
  .ant-menu-title-content {
    margin-left: 20px !important;
  }
  .ant-menu-title-content a,
  .ant-menu-title-content {
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: 100%;
    letter-spacing: 0.02em;
    color: #ffffff !important;
    text-rendering: geometricPrecision;
    overflow: visible !important;
  }
  .ant-icon {
    font-size: 20px !important;
  }
  .ant-menu-item-selected,
  .ant-menu-submenu:hover .ant-menu-submenu-title,
  .ant-menu-item:hover {
    background-color: #333333 !important;
    &:before {
      content: '';
      position: absolute;
      background: linear-gradient(270deg, #ffc800 -19.63%, #f78d1e 47.58%, #f78d1e 107.53%);
      width: 8px;
      left: 0;
      height: 100%;
    }
  }
`;
