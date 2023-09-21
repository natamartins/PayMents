export function Card(coin: any, taxa: any, valueDolar: any, router: any) {
    const taxaIOFTransition = 6.4 / 100;
    const impost = taxa / 100;
    const valueInReal = (coin * valueDolar) + impost + taxaIOFTransition

    return router.push(`/ResulteSame/${valueDolar}/${valueInReal}/${taxa}`);
    // return router.push(`/ResulteSame/${valueDolar}/${parseFloat(valueInReal)}/${taxa}`);
}   