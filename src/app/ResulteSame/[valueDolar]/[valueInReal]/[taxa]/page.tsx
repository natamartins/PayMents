"use client"
import { BoxResult, ButtonBackHome, TitlePrimery, TitleResult, TitleSecondy } from '@/Styles/ComponentsUtils'
import Image from 'next/image'
import React from 'react'
import ImgBack from '@/imgs/arrow-left.svg'
import Link from 'next/link'
import { formatValue } from '@/utils/FormatValue'

const page = ({ params }: any) => {
    const { valueDolar, valueInReal, taxa } = params
    const dolar = formatValue(valueInReal)

    return (
        <BoxResult>
            <ButtonBackHome>
                <Link href='/'>
                    <Image src={ImgBack} alt='' />
                    Voltar
                </Link>
            </ButtonBackHome>
            <TitlePrimery>O resultado do cálculo é</TitlePrimery>
            <TitleResult>R$ {dolar}</TitleResult>
            <TitleSecondy>Taxa de {taxa}%</TitleSecondy>
            <TitleSecondy>Contação do dólar: $1,00 = R${valueDolar}</TitleSecondy>
        </BoxResult>
    )
}

export default page