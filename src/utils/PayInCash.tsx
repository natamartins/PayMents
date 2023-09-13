export function Cash(coin: any, taxa: any, valueDolar: any, router: any) {
    const taxaIOF = 1.1;
    const same = coin + taxa * valueDolar + taxaIOF

    return router.push(`/ResulteSame/${same}${valueDolar}`);
}