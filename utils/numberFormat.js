// Decorative function for formatting numbers

export const numberFormat = (num) => {
  return String(num).replace(/(.)(?=(\d{3})+$)/g, '$1,');
};
