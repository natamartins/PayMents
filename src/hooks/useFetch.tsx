"use client"
import { REACT_URL_QUOTE } from '@/api'
import { formatValue } from '@/utils/FormatValue'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


export const useFetch = () => {
    const [valueDolar, setValuDolar]: any = useState()
    const [quote, setQuote]: any = useState()

    async function getCoin() {
        try {
            const { data } = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL')
            const dolar = formatValue(data.USDBRL.bid)

            setValuDolar(dolar.toString())
        } catch (err) {
            console.log("Erro ==>", err)
        }
    }

    async function getCote() {
        try {
            const { data } = await axios.get(`${REACT_URL_QUOTE}`)
            setQuote(data)
        } catch (err) {
            console.log("Erro ==>", err)
        }
    }

    useEffect(() => {
        getCoin()
        getCote()
    }, [])

    return { valueDolar, quote }
}