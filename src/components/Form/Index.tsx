'use client'
import React, { useState } from 'react'
import { Box, BoxForm, ButtonOff, CheckRadius, Form, Input, Label } from '@/Styles/ComponentsUtils'
import { useFetch } from '@/hooks/useFetch'
import Cash from '@/utils/PayInCash'
import Card from '@/utils/PayByCard'

const Index = () => {
    const [coin, setCoin]: any = useState()
    const [taxa, setTaxa]: any = useState()
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('opcao1');
    const { coin: dateCoin, getCoin } = useFetch(coin, taxa)

    const handleChange = (e: any) => {
        setOpcaoSelecionada(e.target.value);

    };

    const handleGetInfo = (e: any) => {
        e.preventDefault()
        if (opcaoSelecionada === 'opcao1') {
            Cash(coin, taxa)
        } else if (opcaoSelecionada === 'opcao2') {
            Card(coin, taxa)
        }
        // getCoin()
    }

    return (
        <Form onSubmit={handleGetInfo}>
            <BoxForm>
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
                        placeholder='0%'
                    />
                </Box>
            </BoxForm>
            <BoxForm>
                <Label>Tipo de compra</Label>
                <Box>
                    <CheckRadius
                        type='radio'
                        name="opcao"
                        value="opcao1"
                        checked={opcaoSelecionada === 'opcao1'}
                        onChange={handleChange}
                    />
                    <Label>Dinheiro</Label>
                </Box>
                <Box>
                    <CheckRadius
                        type='radio'
                        name="opcao"
                        value="opcao2"
                        checked={opcaoSelecionada === 'opcao2'}
                        onChange={handleChange}
                    />
                    <Label>Cartão</Label>
                </Box>
            </BoxForm>
            <ButtonOff>Converter</ButtonOff>
        </Form>
    )
}

export default Index