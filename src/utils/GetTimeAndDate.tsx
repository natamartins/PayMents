const dataAtual = new Date();
const formatoDataHora: any = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short'
};

export const dataHoraFormatada = dataAtual.toLocaleDateString('pt-BR', formatoDataHora);

console.log(dataHoraFormatada); 
