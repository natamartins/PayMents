export function formatValue(value: number) {
    const same = value * 100;
    const format = Math.round(same);
    const result = format / 100;

    return result.toString()
}