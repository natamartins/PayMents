export function Cash(coin: any, taxa: any, valueDolar: any, router: any) {
    const taxaIOF = 1.1 / 100;
    const impost = (taxa / 100) * valueDolar
    const valueInReal = coin + impost + taxaIOF

    return router.push(`/ResulteSame/${valueDolar}/${parseFloat(valueInReal)}/${taxa}`);
}