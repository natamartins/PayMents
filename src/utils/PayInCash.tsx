export default function Cash(coin: any, taxa: any) {
    const taxaIOF = 1.1 / 100;

    const same = coin + taxa * (coin + taxaIOF)

    return console.log("Dinheiro ==>", same)
}