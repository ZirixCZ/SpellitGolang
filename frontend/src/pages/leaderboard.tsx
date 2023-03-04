import * as React from "react";
import {ButtonWrapper} from "./dashboard";
import styled from "styled-components/macro";
import {useNavigate} from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import LeaderboardView from "../views/LeaderboardView";

const Leaderboard = (): JSX.Element => {

    const navigate = useNavigate();

    return (
        <Container height={100} width={100}>
            <Container height={100} width={25} widthMobile={75}
                       justifyContent="space-evenly">
                <LeaderboardView />
                <ButtonWrapper onClick={() => {
                    navigate("/")
                }}>
                    <Button leaderboard medium>Dashboard</Button>
                </ButtonWrapper>
            </Container>
        </Container>
    )

}

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 25%;
  height: 100%;
  @media (max-width: 1366px) {
    width: 35%;
  }
  @media (max-width: 1080px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 75%;
  }
`

export default Leaderboard;
