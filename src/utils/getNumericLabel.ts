export const getSumLabel = (price: number, count: number) => {
  if (price === 0.1) {
    return "";
  } else if (`${price}`.endsWith(".9")) {
    return "";
  } else {
    return Intl.NumberFormat("ru-RU").format(price * count);
  }
};

export const getPriceLabel = (price: number) => {
  if (price === 0.1) {
    return "Оценка";
  } else if (`${price}`.endsWith(".9")) {
    return `от ${Intl.NumberFormat("ru-RU").format(Math.floor(price))}`;
  } else {
    return Intl.NumberFormat("ru-RU").format(price);
  }
};
