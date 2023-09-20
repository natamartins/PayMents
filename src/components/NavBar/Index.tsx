'use client'
import Image from 'next/image'
import React from 'react'
import { dataHoraFormatada } from '@/utils/GetTimeAndDate'
import ImgLogo from '@/imgs/MainLogo.svg'
import { BoxInfo, BoxNavInfo, List, ListQuote, Nav, TitlePrimery, TitleSecondy, Value } from '@/Styles/ComponentsUtils'
import { useFetch } from '@/hooks/useFetch'

interface QuotesTypes {
    id: number
    symbol: string
    current_price: number
    price_change_percentage_24h: number
}

const NavBar = () => {
    const { quote }: any = useFetch()

    return (
        <Nav>
            <Image src={ImgLogo} alt='logo do site: stone currency' />
            <BoxNavInfo>
                <BoxInfo>
                    <TitlePrimery>{dataHoraFormatada}</TitlePrimery>
                </BoxInfo>
                <TitleSecondy>
                    <ListQuote>
                        {quote && quote.map((name: QuotesTypes) => (
                            <List key={name.id}>
                                <Value>{name.symbol.toLocaleUpperCase()}</Value>
                                <Value>{'R$' + `${name.current_price.toLocaleString('pt-BR')}`}</Value>
                                <Value
                                    className={`${name.price_change_percentage_24h < 0 ? 'red' : 'gren'
                                        }`}
                                >
                                    {name.price_change_percentage_24h > 0
                                        ? `${'+' + name.price_change_percentage_24h}`
                                        : name.price_change_percentage_24h}
                                </Value>
                            </List>
                        ))}
                    </ListQuote>
                </TitleSecondy>
            </BoxNavInfo>
        </Nav>
    )
}

export default NavBar