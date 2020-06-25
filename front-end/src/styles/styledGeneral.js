import styled from 'styled-components';
import tw from 'tailwind.macro';

export const PageContainer = styled.div `
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #fff;
`;

export const Content = styled.div `
  flex: 1 0 auto;
  ${tw`mb-4`}
`;
export const Footer = styled.footer `
  font-size: 12px;
  color: #7f7f7f;
  text-align: center;
  margin: 20px;
  & > a {
    text-decoration: none;
    color: #6750a3;
    font-weight: bold;
  }
`;

export const Header = styled.header `
  background-color: rgb(104, 80, 163);
  color: #fff;
  ${tw`flex justify-around items-center content-around p-3`}
  & > p > span {
    font-weight: bold;
  }
`;

export const LogoutButton = styled.button `
  width: auto;
  cursor: pointer;
  text-align: center;
  padding: 10px 20px;
  background-color: rgb(126, 96, 171);
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.13);
  border: none;
  outline: 0;
  ${tw`rounded-md block`}
`;