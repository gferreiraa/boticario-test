import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Empty = styled.div`
  ${tw`h-full flex flex-col justify-center items-center`}
  & > p {
    color: #7f7f7f;
    ${tw`my-2`}
  }
`;
export const AddButton = styled.div`
  cursor: pointer;
  padding: 15px 40px;
  margin-top: 5px;
  background-color: rgb(109, 211, 109);
  box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.13);
  border: none;
  transition: all 0.3s ease;
  outline: 0;
  ${tw`rounded-lg mt-4`}
  & > a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }
`;
