import styled from 'styled-components';
import tw from 'tailwind.macro';

const greyColor = '#7f7f7f';
const whiteColor = '#fff';
const blackColor = '#000';

export const PageContainer = styled.div `
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: linear-gradient(to right, #654ea3, #eaafc8);
`;

export const LayoutWrapper = styled.main `
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  ${tw`h-full flex justify-center items-center`}
`;

export const LoginCard = styled.div `
  background: ${whiteColor};
  ${tw`w-auto sm:w-1/3 lg:w-1/4 xl:w-1/4 rounded-lg overflow-hidden shadow-lg p-6 sm:p-6`}
`;

export const RegisterCard = styled.div `
  background: ${whiteColor};
  ${tw`w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/5 my-24 p-6 px-4 md:px-4 lg:px-20 xl:px-20 rounded-lg`}
`;

export const Brand = styled.div `
  display: flex;
  justify-content: center;
  & img {
    filter: brightness(0.5);
    width: 200px;
    ${tw`mb-6`}
  }
`;

export const TitleCard = styled.h1 `
  font-size: 1rem;
  color: ${greyColor};
  ${tw`mb-8 text-center`}
`;

export const Input = styled.input `
  height: 56px;
  border: none;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  width: 280px;
  ${tw`bg-white appearance-none border-2 border-gray-200 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-4`}
`;

export const Label = styled.label `
  font-size: 0.9rem;
  color: ${blackColor};
  opacity: 0.8;
  font-weight: 500;
  ${tw`block mb-1`}
`;
export const HomeButton = styled.button `
  cursor: pointer;
  min-width: 100px;
  text-align: center;
  padding: 15px 40px;
  margin-top: 5px;
  background-color: rgb(104, 80, 163, 1);
  color: ${whiteColor};
  font-size: 14px;
  margin-left: auto;
  font-weight: 500;
  box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.13);
  border: none;
  transition: all 0.3s ease;
  outline: 0;
  ${tw`rounded-lg w-full block mb-4`}
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 2px 6px -1px;
    &:active {
      transform: scale(0.99);
    }
  }
`;

export const Footer = styled.footer `
  font-size: 12px;
  color: ${whiteColor};
  text-align: center;
  margin-bottom: 10px;
`;

export const LinkRoute = styled.span `
  font-size: 12px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  & > a {
    text-decoration: none;
    color: ${greyColor};
  }
`;