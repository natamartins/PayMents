"use client"
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


export const useFetch = () => {
    const [valueDolar, setValuDolar]: any = useState()
    // const [totalCash, setTotalCash] = useState()
    // const [totalCard, setTotalCard] = useState()
    

    async function getCoin() {
        try {
            const { data } = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL')
            setValuDolar(data.USDBRL.bid)

        } catch (err) {
            console.log("Erro ==>", err)
        }
    }

    // const handleGetInfo = (e: any) => {
    //     const router = useRouter();
    //     e.preventDefault()
    //     router.push(`/ResulteSame/${totalCash}${totalCard}`);


    //     if (opcao === 'opcao1') {
    //         Cash()
    //     } else if (opcao === 'opcao2') {
    //         Card(coin, taxa)
    //     }
    // }

    // function Cash() {
    //     const taxaIOF = 1.1;
    //     const same = coin + taxa * valueDolar + taxaIOF

    //     return setTotalCash(same)
    // }

    // function Card(coin: any, taxa: any) {
    //     const taxaIOFTransition = 6.38;
    //     const same: any = (coin + taxa + taxaIOFTransition) * valueDolar

    //     return setTotalCard(same)
    // }

    useEffect(() => {
        getCoin()
    }, [])


    return { valueDolar }
}