import * as React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import callApi from "../../utils/callApi";
import Navbar from "../../views/Navbar";
import Loader from "../../components/Loader";
import { tablet, mobile } from "../../Global";

const Auth = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = React.useState(false);

  React.useEffect(() => {
    callApi("GET", "/api/home", null).then((res) => {
      if (res.ok) {
        setAuth(true);
        return;
      }
      setTimeout(() => {
        navigate("/welcome");
      }, 1000);
    });
  }, []);

  return (
    <Container>
      {auth ? (
        <>
          <Navbar />
          <SafeArea>
            <Outlet />
          </SafeArea>
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: fit-content;
  width: 100%;
`;

const SafeArea = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export default Auth;
