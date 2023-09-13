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

export const Nav = styled.nav``

export const Logo = styled.img``

export const TitlePrimery = styled.p``

export const TitleSecondy = styled.p``

export const TitleTortary = styled.p``

export const ButtonOn = styled.button``

export const ButtonOff = styled.button`
width: 150px;
height: 55px;
border-radius: 8px;
border: 1px solid ${theme.color.button.gray};
`

export const ButtonBack = styled.button``

export const Form = styled.form``

export const BoxForm = styled.div``

export const Box = styled.div``

export const Label = styled.label``

export const Input = styled.input`
width: 170px;
height: 55px;
border-radius: 4px;
border: 1px solid #D7E0EB;
box-shadow: 0px 8px 4px 0px #0D111B14;
`
export const CheckRadius = styled.input``

export const BoxNavInfo = styled.div``

export const BoxInfo = styled.div``