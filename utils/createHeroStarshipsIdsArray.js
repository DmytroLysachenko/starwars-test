// Function creating array of starships ids for hero and films he participated in

export const createHeroStarshipsIdsArray = (hero, films) => {
  const starshipsIdArray = [];
  // creating empty array
  for (const film of films) {
    starshipsIdArray.push(...film.starships);
  }

  // iteration for filling up starshipsIdArray array with starships ids from all films (could be repeated)
  if (starshipsIdArray && starshipsIdArray.length > 0) {
    const heroStarshipsIdsArray = starshipsIdArray.filter((id) =>
      hero.starships.includes(id)
    );

    // if starshipsIdArray array is not empty - filtering ids of starships to only that starships where our hero was.

    // ids of same starships from different movies still could be repeated

    const uniqueIdsArray = [];

    // create empty array for unique ids

    heroStarshipsIdsArray.forEach((id) => {
      if (!uniqueIdsArray.includes(id)) {
        uniqueIdsArray.push(id);
      }
    });

    // making forEach iteration to fill up uniqueIdsArray with no-repeating ids

    // As a result we have array of unique ids for starships from certain films, where our hero was flying it.

    return uniqueIdsArray;
  }
  return [];
};
