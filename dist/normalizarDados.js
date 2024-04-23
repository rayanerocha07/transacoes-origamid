import moedaParaNumero from './moedaParaNumero.js';
import stringToDate from './stringToDate.js';
export default function normalizarDados(transacao) {
    return {
        nome: transacao.Nome,
        id: transacao.ID,
        data: stringToDate(transacao.Data),
        status: transacao.Status,
        email: transacao.Email,
        moeda: transacao['Valor (R$)'],
        valor: moedaParaNumero(transacao['Valor (R$)']),
        pagamento: transacao['Forma de Pagamento'],
        novo: Boolean(transacao['Cliente Novo']),
    };
}
//# sourceMappingURL=normalizarDados.js.map