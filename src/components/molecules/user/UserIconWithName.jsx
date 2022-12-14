import React, { memo } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { UserState } from "../../../store/UserState";

export const UserIconWithName = memo((props) => {
  const { image, name} = props;
  const {userInfo} = useRecoilValue(UserState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImage height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;

const SContainer = styled.dl`
  text-align: center;
`;
const SImage = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
