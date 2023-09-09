"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const [coin, setCoin] = useState({})

    async function getCoin() {
        try {
            const { data } = await axios.get('')
            setCoin(data)
        } catch (err) {
            console.log("Erro ==>", err)
        }
    }

    useEffect(() => {
        getCoin()
    }, [])

    return { coin }
}

export default useFetch