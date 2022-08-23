import styled from "styled-components";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return <SFooter>&copy; {year} hoge</SFooter>;
};
const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
