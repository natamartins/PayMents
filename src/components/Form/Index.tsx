"use client"
import React, { useState } from 'react'
import { useFetch } from '@/hooks/useFetch'
import Image from 'next/image'
import Transfer from '@/imgs/Transfer.svg'
import { useRouter } from 'next/navigation'
import { Cash } from '@/utils/PayInCash'
import { Card } from '@/utils/PayByCard'
import { Box, BoxCheck, BoxForm, BoxFormCheck, BoxFormConvert, ButtonOff, ButtonOn, CheckRadius, Form, Input, Label, TitleTortary } from '@/Styles/ComponentsUtils'

const Index = () => {
    const router = useRouter();
    const { valueDolar }: any = useFetch()
    const [coin, setCoin]: any = useState('')
    const [taxa, setTaxa]: any = useState('')
    const [opcao, setOpcaoSelecionada] = useState('opcao1');

    const handleChange = (e: any) => {
        setOpcaoSelecionada(e.target.value);
    };

    const handleGetInfo = (e: any) => {
        e.preventDefault()

        if (opcao === 'opcao1') {
            Cash(coin, taxa, valueDolar, router)
        } else if (opcao === 'opcao2') {
            Card(coin, taxa, valueDolar, router)
        }
    }

    return (
        <Form onSubmit={handleGetInfo}>
            <BoxFormConvert>
                <Box>
                    <Label>Dólar</Label>
                    <Input
                        id='dolar'
                        type='number'
                        value={coin}
                        onChange={(e: any) => setCoin(e.target.value)}
                        placeholder='$1,00'
                    />
                </Box>
                <Box>
                    <Label>Taxa do Estado</Label>
                    <Input
                        id='taxa'
                        type='number'
                        value={taxa}
                        onChange={(e: any) => setTaxa(e.target.value)}
                        placeholder='0.00%'
                    />
                </Box>
            </BoxFormConvert>
            <BoxForm>
                <TitleTortary>Tipo de compra</TitleTortary>
                <BoxFormCheck>
                    <BoxCheck>
                        <CheckRadius
                            type='radio'
                            name="opcao"
                            value="opcao1"
                            checked={opcao === 'opcao1'}
                            onChange={handleChange}
                        />
                        <Label>Dinheiro</Label>
                    </BoxCheck>
                    <BoxCheck>
                        <CheckRadius
                            type='radio'
                            name="opcao"
                            value="opcao2"
                            checked={opcao === 'opcao2'}
                            onChange={handleChange}
                        />
                        <Label>Cartão</Label>
                    </BoxCheck>
                </BoxFormCheck>
            </BoxForm>
            {
                taxa === '' ? (
                    <ButtonOff disabled>
                        <Image src={Transfer} alt='icone de converte, uma seta para direita e outra para esquerda' />
                        Converter
                    </ButtonOff>
                ) : (
                    <ButtonOn>
                        <Image src={Transfer} alt='icone de converte, uma seta para direita e outra para esquerda' />
                        Converter
                    </ButtonOn>
                )
            }
        </Form>
    )
}

export default Index