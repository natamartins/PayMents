"use client"
import styled, { keyframes } from "styled-components";

const theme = {
    color: {
        text: {
            100: '#45505E',
            200: '#8C9CAD',
            300: '#2E3742',
        },
        button: {
            'gray': '#8C9CAD',
            'green01': '#00AB63',
            'green02': '#008B57',
            'white': '#FFFFFF',
        },
        fontWeight: {
            100: '450',
            200: '500',
            300: '600',
        }
    }
}

export const Header = styled.header``

export const Main = styled.main``

export const Nav = styled.nav`
width: 100%;
max-width: 850px;
padding: 0px 10px;
margin: auto;
display: flex;
align-items: center;
margin-top: 2rem;
margin-bottom: 5rem;
gap: 5rem;

@media (max-width: 768px) {
    gap: 1.5rem;
} 
`

export const BoxNavInfo = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`

export const BoxInfo = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`

export const Logo = styled.img``

export const TitlePrimery = styled.p`
color: ${theme.color.text[100]};
`

export const TitleSecondy = styled.p`
font-size: 14px;
color: ${theme.color.text[200]};
`

export const TitleTortary = styled.p`
font-size: 18px;
font-weight: 500;
line-height: 21.09px;
margin-bottom: 1rem;
`

export const TitleResult = styled.h1`
color: ${theme.color.button.green01};
margin-top: 10px;
margin-bottom: 1rem;
`

export const ListQuote = styled.ul`
width: 300px;
overflow: scroll;
display: flex;
gap: 10px;

&::-webkit-scrollbar {
    width: 10px;
    height: 5px;
  }

&::-webkit-scrollbar-track {
    background: transparent;
  }

&::-webkit-scrollbar-thumb {
    background-color: rgba(230, 228, 228, 0.493);
    border-radius: 20px;
}

@media (max-width: 768px) {
    width: 250px;
} 

`

export const List = styled.li`
display: flex;
align-items: center;
gap: 5px;
`

export const Value = styled.p``

export const ButtonOn = styled.button`
width: 150px;
height: 55px;
padding-left: 15px;
display: flex;
align-items: center;
gap: 15px;
border-radius: 8px;
border: 2px solid ${theme.color.button.green02};
background-color: ${theme.color.button.green01};
color: ${theme.color.button.white};
font-size: 16px;
cursor: pointer;
`

export const ButtonOff = styled.button`
width: 150px;
height: 55px;
padding-left: 15px;
display: flex;
align-items: center;
gap: 15px;
border-radius: 8px;
border: 2px solid ${theme.color.button.green01};
background-color: ${theme.color.button.gray};
color: ${theme.color.button.white};
font-size: 16px;
cursor: pointer;
`

export const ButtonBack = styled.button``

export const BoxFormConvert = styled.form`
display: flex;
align-items: center;
gap: 1.5rem;
margin-bottom: 2rem;
`

export const Form = styled.form`
width: 100%;
max-width: 850px;
padding: 0px 10px;
margin: auto;
`

export const BoxForm = styled.div``

export const Box = styled.div`
display: flex;
flex-direction: column;

label{
    font-size: 18px;
    font-weight: 500;
    line-height: 21.09px;
    margin-bottom: 10px;
    color: ${theme.color.text[300]};
}
`

export const BoxCheck = styled.div``

export const BoxFormCheck = styled.div`
display: flex;
align-items: center;
gap: 1rem;
margin-bottom: 2rem;
`

export const Label = styled.label``

export const Input = styled.input`
width: 170px;
height: 55px;
border-radius: 4px;
padding-left: 15px;
border: 1px solid #D7E0EB;
box-shadow: 0px 8px 4px 0px #0D111B14;
`
export const CheckRadius = styled.input``


export const ButtonBackHome = styled.button`
width: 120px;
height: 55px;
display: flex;
align-items: center;
gap: 10px;
padding-left: 20px;
border-radius: 8px;
margin-bottom: 1.5rem;
border: 1px solid #D7E0EB;
box-shadow: 0px 8px 4px 0px #0D111B14;

 a{
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${theme.color.text[200]};
    text-decoration: none;
 }
`

export const BoxResult = styled.div`
width: 100%;
max-width: 50%;
margin: auto;
`
export const Footer = styled.footer`
width: 100%;
padding: 1rem 0px;
position: absolute;
bottom: 0;
text-align: center;
background-color: ${theme.color.text[200]};
`
    