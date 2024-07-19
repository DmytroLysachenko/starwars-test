const createStarshipsNodes = (starships) => {
  const starshipsTitleNode = {
    id: 'starships',
    data: { label: 'Starships' },
    position: { x: -100, y: 100 },
  };

  const starshipsNodes = starships.map((starship, index) => ({
    id: `starship-${starship.id}`,
    data: { label: starship.name },
    position: { x: -180 * (index + 1), y: 200 },
  }));

  return { starshipsTitleNode, starshipsNodes };
};

const createFilmsNodes = (films) => {
  const filmsTitleNode = {
    id: 'films',
    data: { label: 'Films' },
    position: { x: 100, y: 100 },
  };

  const filmsNodes = films.map((film, index) => ({
    id: `film-${film.id}`,
    data: { label: film.title },
    position: { x: 180 * (index + 1), y: 200 },
  }));

  return { filmsTitleNode, filmsNodes };
};

const createArrayEdges = (name, array) => {
  console.log(name);
  const heroArrayTitleEdge = {
    id: `hero-${name}`,
    source: 'hero',
    target: name,
  };

  const arrayEdges = array.map((arrayNode) => ({
    id: `${name}-${arrayNode.id}`,
    source: name,
    target: arrayNode.id,
  }));

  return [heroArrayTitleEdge, ...arrayEdges];
};

export const createInitialData = (hero, films, starships) => {
  const heroNode = {
    id: 'hero',
    data: { label: hero.name },
    position: { x: 0, y: 0 },
  };
  const initialNodes = [heroNode];
  const initialEdges = [];
  if (starships.length > 0) {
    const { starshipsTitleNode, starshipsNodes } =
      createStarshipsNodes(starships);
    initialNodes.push(starshipsTitleNode, ...starshipsNodes);
    const starshipsEdges = createArrayEdges('starships', starshipsNodes);
    initialEdges.push(...starshipsEdges);
  }
  if (films.length > 0) {
    const { filmsTitleNode, filmsNodes } = createFilmsNodes(films);
    initialNodes.push(filmsTitleNode, ...filmsNodes);
    const filmsEdges = createArrayEdges('films', filmsNodes);
    initialEdges.push(...filmsEdges);
  }
  return { initialNodes, initialEdges };
};
