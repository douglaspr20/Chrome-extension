import { Spin } from "antd";
import styled from "styled-components";
import { SpinProps } from "antd/lib/spin";
import { CSSProperties } from "react";

const LoadingContainer = styled("div")<{ height: number }>`
  display: flex;
  background: transparent;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  height: 400px;
  .ant-spin-dot-item {
    background-color: #ffb640;
  }
`;

interface LoadingScreenProps {
  height?: number;
  size?: SpinProps["size"];
  style?: CSSProperties;
}

export const LoadingScreen = ({
  height,
  size = "large",
  style,
}: LoadingScreenProps) => {
  return (
    <LoadingContainer style={style} height={height}>
      <Spin size={size} />
    </LoadingContainer>
  );
};
