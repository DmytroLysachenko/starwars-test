const createStarshipsNodes = (starships) => {
  const starshipsNodes = starships.map((starship, index) => {
    const XAxisPosition = 100 * (index + 1) * (-1) ** index;
    return {
      id: `starship-${starship.id}`,
      data: { label: starship.name },
      position: { x: XAxisPosition, y: 500 },
    };
  });

  return [...starshipsNodes];
};

const createFilmsNodes = (films) => {
  const filmsNodes = films.map((film, index) => {
    const XAxisPosition = 200 * (index + 1) * (-1) ** index;

    return {
      id: `film-${film.id}`,
      data: { label: film.title },
      position: { x: XAxisPosition, y: 200 },
    };
  });

  return [...filmsNodes];
};

const createFromOneToManyEdges = (fromName, toName, array) => {
  const arrayEdges = array.map((element) => ({
    id: `${fromName}-${toName}-${element.id}`,
    source: fromName,
    target: `${toName}-${element.id}`,
  }));

  return [...arrayEdges];
};

export const createInitialData = (hero, films, starships) => {
  const heroNode = {
    id: 'hero',
    data: { label: hero.name },
    position: { x: 0, y: 0 },
  };
  const initialNodes = [heroNode];
  const initialEdges = [];

  if (starships && starships.length) {
    const starshipsNodes = createStarshipsNodes(starships);
    initialNodes.push(...starshipsNodes);
  }

  if (films && films.length) {
    const filmsNodes = createFilmsNodes(films);
    const filmsEdges = createFromOneToManyEdges('hero', 'film', films);
    initialNodes.push(...filmsNodes);
    initialEdges.push(...filmsEdges);
    for (const film of films) {
      const starshipsForFilm = starships.filter((starship) =>
        film.starships.includes(starship.id)
      );
      const eachFilmEdges = createFromOneToManyEdges(
        `film-${film.id}`,
        'starship',
        starshipsForFilm
      );
      initialEdges.push(...eachFilmEdges);
    }
  }

  return { initialNodes, initialEdges };
};
