import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { UserState } from "../../store/UserState";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Top = () => {
  const navigate = useNavigate();
  const {setUserInfo} = useSetRecoilState(UserState);
  const onClickAdmin = () => {
    setUserInfo({isAdmin: true});
    navigate("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({isAdmin: false});
    navigate("/users");
  }
  return (
    <DefaultLayout>
      <SContainer>
        <h2>TOPページです</h2>
        <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
        <br />
        <br />
        <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      </SContainer>
    </DefaultLayout>
  );
};
const SContainer = styled.div``;
