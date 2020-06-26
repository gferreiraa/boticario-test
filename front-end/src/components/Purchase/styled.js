import styled from 'styled-components';
import tw from 'tailwind.macro';

const greyColor = '#7f7f7f';
const whiteColor = '#fff';
const mainColor = '#6750a3';

export const Container = styled.div `
  ${tw`h-full flex flex-col items-center`}
`;

export const Subtitle = styled.p `
  line-height: 24px;
  color: ${greyColor};
  ${tw`mt-16 mb-4 text-center sm:text-center md:text-center lg:text-center xl:text-center`}
`;

export const AddButton = styled.div `
  cursor: pointer;
  padding: 15px 40px;
  margin-top: 5px;
  background-color: rgb(109, 211, 109);
  box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.13);
  border: none;
  transition: all 0.3s ease;
  outline: 0;
  ${tw`rounded-lg mt-4 mb-8`}
  & > a {
    text-decoration: none;
    color: ${whiteColor};
    font-weight: bold;
  }
`;

export const Caption = styled.p `
  font-size: 1.5em;
  margin: .5em 0 .75em;
  color: ${mainColor};
  font-weight: bold; 
`