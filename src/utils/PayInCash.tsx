export function Cash(coin: any, taxa: any, valueDolar: any, router: any) {
    const taxaIOF = 1.1 / 100;
    const impost = (taxa / 100)
    const valueInReal = (coin * valueDolar) + impost + taxaIOF

    return router.push(`/ResulteSame/${valueDolar}/${valueInReal}/${taxa}`);
    // return router.push(`/ResulteSame/${valueDolar}/${parseFloat(valueInReal)}/${taxa}`);
}