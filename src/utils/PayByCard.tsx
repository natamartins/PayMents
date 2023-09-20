export function Card(coin: any, taxa: any, valueDolar: any, router: any) {
    const taxaIOFTransition = 6.4 / 100;
    const impost = taxa / 100;
    const valueInReal = coin + impost + taxaIOFTransition * valueDolar

    return router.push(`/ResulteSame/${valueDolar}/${parseFloat(valueInReal)}/${taxa}`);
}   