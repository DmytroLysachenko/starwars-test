export const getLastValueFromHeader = (headersList) => {
  const urlArray = headersList.get('x-pathname').split('/');
  const value = Number(urlArray[urlArray.length - 1].trim());
  return value;
};
