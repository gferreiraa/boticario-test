import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Container = styled.div`
${tw`h-full flex flex-col items-center`}
`;

export const AddPurchase = styled.button`
  cursor: pointer;
  padding: 15px 40px;
  margin-top: 5px;
  background-color: rgb(109, 211, 109);
  box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.13);
  border: none;
  transition: all 0.3s ease;
  outline: 0;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  ${tw`rounded-lg mt-4 mb-4`}
`;

export const BackButton = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 15px 40px;
  margin-top: 5px;
  box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.13);
  border: none;
  transition: all 0.3s ease;
  outline: 0;
  text-decoration: none;
  color: rgb(104,80,163);
  font-weight: bold;
  ${tw`rounded-lg mb-8`}
`;

export const HCard = styled.div`
  background: #fff;
  ${tw`w-3/4 sm:w-auto md:w-auto lg:w-auto rounded-lg overflow-hidden  p-12 sm:p-6 md:p-12 lg:p-12`}
`;

export const Form = styled.form`
  ${tw `flex flex-col`}
`

export const Input = styled.input`
  border: none;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  ${tw`shadow appearance-none border-2 border-gray-200 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-2 mb-4`}
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #000;
  opacity: 0.8;
  font-weight: 400;
  ${tw`block mb-1`}
`;

export const Subtitle = styled.div`
  color: #7f7f7f;
  ${tw`mt-2 mb-8`}
`;