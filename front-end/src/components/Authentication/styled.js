import styled from "styled-components"
import tw from "tailwind.macro"


export const HCard = styled.div`
  background: #fff;
  ${tw `max-w-sm rounded-lg overflow-hidden shadow-lg p-12`}
`

export const logoBoticario = styled.div`
  & img {
    filter: brightness(0.5);
    width: 280px;
    ${tw `block mb-5`}
  }
`

export const LayoutWrapper =  styled.main`
  display:flex;
  flex-direction: column;
  flex: 1 0 auto;
  ${tw `h-full flex justify-center items-center`}
`
export const LoginTitle = styled.h4`
  font-size:  24px; 
  font-weight:  600; 
  color:  #000; 
  opacity: .5; 
`
export const Input = styled.input` 
  height: 56px; 
  border: none; 
  border-bottom: solid 1px rgba(0,0,0,.1); 
  width: 280px; 
  ${tw `bg-white appearance-none border-2 border-gray-200 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-4`}
`

export const Label =  styled.label`
  font-size:  1rem; 
  color:  #000;
  opacity:  .8;
  font-weight:  400; 
  ${tw `block mb-2`}
`
export const LoginButton = styled.button`
  width: auto;
  cursor:pointer;
  min-width:  100px;
  text-align:  center; 
  padding:  15px 40px;
  margin-top:  5px; 
  background-color: rgb(182,157,230); 
  color:  #fff; 
  font-size:  14px;
  margin-left:  auto; 
  font-weight:  500; 
  box-shadow:  0px 2px 6px -1px rgba(0,0,0,.13); 
  border:  none;
  transition:  all .3s ease; 
  outline: 0; 
  ${tw `rounded-lg w-full block mb-4`}
  &:hover {
    transform:  translateY(-3px);
    box-shadow:  0 2px 6px -1px rgba($primary, .65);
    &:active {
      transform:  scale(.99);
    }
  }
` 
export const ButtonRegister = styled.div`
  & > a {
      text-decoration: none;
      color: rgba(255, 255, 255, 255 0.4);
      font-size: 14px;
      ${tw `text-3x1`}
  }
`

export const Footer = styled.footer`
  font-size: 12px;
  color: #969696;
  text-align: center;
  margin-bottom: 10px;
`





