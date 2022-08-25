import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { HeaderOnly } from "../templates/HeaderOnly";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/Sg3XwuEpybU",
    name: `きよ${val}`,
    email: "12345@gmail.com",
    phone: "090-1111-1111",
    company: {
      name: "テスト株式会社",
    },
    website: "https://github.com/",
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  console.log(userInfo);
  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo?.isAdmin });
  };
  return (
    <HeaderOnly>
      <SContainer>
        <h2>ユーザー一覧</h2>
        <SearchInput />
        <br />
        <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
        <SUserArea>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </SUserArea>
      </SContainer>
    </HeaderOnly>
  );
};
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
