export function Card(coin: any, taxa: any, valueDolar: any, router: any) {
    const taxaIOFTransition = 6.38;
    const same: any = coin + taxa + taxaIOFTransition * valueDolar

    return router.push(`/ResulteSame/${same}${valueDolar}`);
} 