export default function Cash() {
    const dolar: any = ''
    const imposto: any = ''
    const iof: any = ''
    const infra = (dolar + iof)

    const total = dolar + imposto * infra

    return total
}