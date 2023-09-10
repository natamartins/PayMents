"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const useFetch = (dolar: number, taxa: number) => {
    const [coin, setCoin] = useState({})

    async function getCoin() {
        try {
            const { data } = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL')

            if (isNaN(dolar) || dolar < 0) {
                throw new Error('O valor em dólar deve ser um número positivo.')
            }

            const valueInReal = dolar * data.USDBRL.bid
            setCoin(valueInReal)

        } catch (err) {
            console.log("Erro ==>", err)
        }
    }

    return { coin, getCoin }
}