export const numberFormat = (num) => {
  return String(num).replace(/(.)(?=(\d{3})+$)/g, '$1,');
};
