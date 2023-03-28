const currencyFormater = function (number, currency = "BRL") {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    currencyDisplay: "symbol",
  }).format(number);
};

export default currencyFormater;
