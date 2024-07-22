// Decorative function for capitilizing first letter of the string

export const capitalizeFirstLetter = (string) => {
  const result = string.charAt(0).toUpperCase() + string.slice(1);
  return result;
};
