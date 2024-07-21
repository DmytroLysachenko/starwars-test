export const createHeroStarshipsIdsArray = (hero, films) => {
  const starshipsIdArray = [];

  for (const film of films) {
    starshipsIdArray.push(...film.starships);
  }

  if (starshipsIdArray && starshipsIdArray.length > 0) {
    const heroStarshipsIdsArray = starshipsIdArray.filter((id) =>
      hero.starships.includes(id)
    );
    const result = heroStarshipsIdsArray.filter(
      (id) =>
        heroStarshipsIdsArray.indexOf(id) ===
        heroStarshipsIdsArray.lastIndexOf(id)
    );

    return result;
  }
  return [];
};
