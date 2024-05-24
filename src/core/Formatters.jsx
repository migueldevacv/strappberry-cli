export class Formatters {
    static moneyFormat(number) {
        return new Intl.NumberFormat('es-MX', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(number)

    }
}