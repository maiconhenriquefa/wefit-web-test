const formatCurrentBRL = (amount: number): string => {
  const formattedAmount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);

  return formattedAmount;
};

export default formatCurrentBRL;
