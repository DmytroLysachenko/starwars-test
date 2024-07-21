export const createUniqueStarshipsIdsArray = (films) => {
  const starshipsIdArray = [];

  for (const film of films) {
    starshipsIdArray.push(...film.starships);
  }
  if (starshipsIdArray && starshipsIdArray.length > 0) {
    const uniqueStarshipsIdsArray = starshipsIdArray.filter(
      (id) => starshipsIdArray.indexOf(id) === starshipsIdArray.lastIndexOf(id)
    );
    return uniqueStarshipsIdsArray;
  }
  return null;
};
