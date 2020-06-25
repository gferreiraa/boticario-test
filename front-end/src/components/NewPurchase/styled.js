import styled from 'styled-components';
import tw from 'tailwind.macro';

const greyColor = '#7f7f7f';
const whiteColor = '#fff';

export const Container = styled.div `
${tw`h-full flex flex-col items-center`}
`;

export const AddPurchase = styled.button `
  cursor: pointer;
  padding: 15px 40px;
  margin-top: 5px;
  background-color: rgb(109, 211, 109);
  box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.13);
  border: none;
  transition: all 0.3s ease;
  outline: 0;
  text-decoration: none;
  color: ${whiteColor};
  font-weight: bold;
  ${tw`rounded-lg mt-4 mb-4`}
`;

export const BackButton = styled.button `
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

export const PurchaseCard = styled.div `
  background:rgba(127, 127, 127, 0.07);
  ${tw`w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/5 my-12 p-6 px-4 md:px-4 lg:px-20 xl:px-20 rounded-lg`}
`;

export const Form = styled.form `
  ${tw `flex flex-col`}
`

export const Input = styled.input `
  border: none;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  ${tw`shadow appearance-none border-2 border-gray-200 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-2 mb-4`}
`;

export const Label = styled.label `
  font-size: 1rem;
  color: #000;
  opacity: 0.8;
  font-weight: 400;
  ${tw`block mb-1`}
`;

export const Subtitle = styled.div `
  line-height: 24px;
  color: ${greyColor};
  ${tw` mt-5 mb-10 text-center sm:text-center md:text-center lg:text-center xl:text-center`}
`;