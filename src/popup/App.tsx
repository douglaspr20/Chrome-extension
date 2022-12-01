import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { Auth } from "aws-amplify";
import { LoadingScreen, SectionWrapper, useUserStore } from "../modules/shared";
import { fetchUserInformation } from "../modules/session";
import Bookmarks from "./Views/Bookmarks";
import Login from "./Views/Login";
import { logout } from "../modules/app/functions/logout";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const firstName = useUserStore((state) => state.firstName);

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();

      if (user && !firstName) {
        fetchUserInformation().then();
      }

      if (user && firstName) {
        setIsAuthenticated(true);
      }

      if (!user) {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
      await logout();
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkUser().then();
  }, [firstName]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Row>
      <Col>
        <SectionWrapper>
          {isAuthenticated ? (
            <Bookmarks />
          ) : (
            <Login setIsAuthenticated={setIsAuthenticated} />
          )}
        </SectionWrapper>
      </Col>
    </Row>
  );
};

export default App;
