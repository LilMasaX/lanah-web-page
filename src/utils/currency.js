export function formatCurrency(value) {
    return new Intl.NumberFormat("es-CO",{
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(value);
}