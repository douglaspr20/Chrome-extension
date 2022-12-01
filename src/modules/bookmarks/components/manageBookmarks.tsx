import { Button } from "antd";
import styled from "styled-components";
import { CheckCircleOutlined, LogoutOutlined } from "@ant-design/icons";
import { logout } from "../../app/functions/logout";
import { ButtonLogout } from "../../shared";

const BookmarkWrapper = styled.div`
  width: 300px;
  height: 350px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ManageBookmarks = () => {
  return (
    <BookmarkWrapper>
      <CheckCircleOutlined
        style={{ color: "#04A777", fontSize: "32px", marginBottom: "1rem" }}
      />
      <h2>Your Bookmarks have been loaded correctly</h2>

      <p>Click in the button for logout</p>

      <ButtonLogout
        type="dashed"
        size="large"
        icon={<LogoutOutlined />}
        onClick={async () => {
          await logout();
        }}
      >
        Logout
      </ButtonLogout>
    </BookmarkWrapper>
  );
};

export default ManageBookmarks;
