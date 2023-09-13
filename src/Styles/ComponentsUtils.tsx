"use client"
import styled from "styled-components";

const theme = {
    color: {
        text: {
            100: '#45505E',
            200: '#8C9CAD',
            300: '#2E3742',
        },
        button: {
            'gray': '#8C9CAD',
            'green': '#008B57',
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
max-width: 50%;
margin: auto;
display: flex;
align-items: center;
margin-bottom: 5rem;
gap: 5rem;
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
color: ${theme.color.button.green};
margin-top: 10px;
margin-bottom: 1rem;
`

export const ButtonOn = styled.button``

export const ButtonOff = styled.button`
width: 150px;
height: 55px;
padding-left: 15px;
display: flex;
align-items: center;
gap: 15px;
border-radius: 8px;
border: 2px solid ${theme.color.button.gray};
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
max-width: 50%;
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
`

export const BoxResult = styled.div`
width: 100%;
max-width: 50%;
margin: auto;
`