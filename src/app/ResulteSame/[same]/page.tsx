"use client"
import { BoxResult, ButtonBackHome, TitlePrimery, TitleResult, TitleSecondy } from '@/Styles/ComponentsUtils'
import Image from 'next/image'
import React from 'react'
import ImgBack from '@/imgs/arrow-left.svg'
import Link from 'next/link'

const page = ({ params }: any) => {
    console.log("Params ==>", params.same)
    return (
        <BoxResult>
            <Link href='/'>
                <Image src={ImgBack} alt='' />
                Voltar
            </Link>
            <TitlePrimery>O resultado do cálculo é</TitlePrimery>
            <TitleResult>R$ 2000</TitleResult>
            <TitleSecondy>Compra no dinheiro e taxa de 5.2%</TitleSecondy>
            <TitleSecondy>Contação do dólar: $1,00 = R$5,20</TitleSecondy>
        </BoxResult>
    )
}

export default page