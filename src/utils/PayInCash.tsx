export function Cash(coin: any, taxa: any, valueDolar: any, router: any) {
    const taxaIOF = 1.1 / 100;
    const impost = taxa / 100
    const valueInReal = coin + impost * valueDolar + taxaIOF

    return router.push(`/ResulteSame/${parseFloat(valueInReal)}`);
}