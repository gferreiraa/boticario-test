import styled from 'styled-components';
import tw from 'tailwind.macro';

export const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: linear-gradient(to right, #654ea3, #eaafc8);
`;

export const LayoutWrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  ${tw`h-full flex justify-center items-center`}
`;

export const HCard = styled.div`
  background: #fff;
  ${tw`w-3/4 sm:w-auto md:w-auto lg:w-auto rounded-lg overflow-hidden shadow-lg p-12 sm:p-6 md:p-12 lg:p-12`}
`;

export const logoBoticario = styled.div`
  display: flex;
  justify-content: center;
  & img {
    filter: brightness(0.5);
    width: 280px;
    ${tw`mb-5`}
  }
`;

export const Input = styled.input`
  height: 56px;
  border: none;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  width: 280px;
  ${tw`bg-white appearance-none border-2 border-gray-200 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-4`}
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #000;
  opacity: 0.8;
  font-weight: 400;
  ${tw`block mb-1`}
`;
export const LoginButton = styled.button`
  width: auto;
  cursor: pointer;
  min-width: 100px;
  text-align: center;
  padding: 15px 40px;
  margin-top: 5px;
  background-color: rgb(104, 80, 163, 1);
  color: #fff;
  font-size: 14px;
  margin-left: auto;
  font-weight: 500;
  box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.13);
  border: none;
  transition: all 0.3s ease;
  outline: 0;
  ${tw`rounded-lg w-full block mb-4`}/*   &:hover {
    transform:  translateY(-3px);
    box-shadow:  0 2px 6px -1px rgba($primary, .65);
    &:active {
      transform:  scale(.99);
    }
  } */
`;
export const ButtonRegister = styled.div`
  & > a {
    text-decoration: none;
    color: rgba(255, 255, 255, 255 0.4);
    font-size: 14px;
    ${tw`text-3x1`}
  }
`;

export const Footer = styled.footer`
  font-size: 12px;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
`;
export const LinkRoute = styled.span`
  font-size: 12px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  & > a {
    text-decoration: none;
    color: #7f7f7f;
  }
`;
