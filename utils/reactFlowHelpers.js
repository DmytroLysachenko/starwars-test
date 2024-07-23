// createFilmsNodes function taking as parameter Films array - iterating it and creating node for each Films with positions horizontally under hero

export const createFilmsNodes = (films) => {
  const filmsNodes = films.map((film, index) => {
    const XAxisPosition = 100 * (index + 1) * (-1) ** index;

    return {
      id: `film-${film.id}`,
      data: { label: film.title },
      position: { x: XAxisPosition, y: 200 },
    };
  });

  return [...filmsNodes];
};

// createStarshipsNodes function taking as parameter starships array - iterating it and creating node for each starship with positions under films

export const createStarshipsNodes = (starships) => {
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

// Universal function for creating edges between one node and array of others.
// As params taking id of source node - fromName, name of elements in array - toName, and array of nodes itSelf

export const createFromOneToManyEdges = (fromName, toName, array) => {
  const arrayEdges = array.map((element) => ({
    id: `${fromName}-${toName}-${element.id}`,
    source: fromName,
    target: `${toName}-${element.id}`,
  }));

  return [...arrayEdges];
};

// createInitialData includes in itself all above mentioned functions to create both nodes and edges.
// creating object with two properties  { initialNodes, initialEdges } required for setting up graph from react-flow library
// as parameters getting hero object,films array and starships array.

export const createInitialData = (hero, films, starships) => {
  const heroNode = {
    id: 'hero',
    data: { label: hero.name },
    position: { x: 0, y: 0 },
  };

  // hero node set up at position  { x: 0, y: 0 }

  const initialNodes = [heroNode];
  const initialEdges = [];

  // creating arrays for our resulting variables and immediately adding heroNode to nodes

  if (starships && starships.length) {
    const starshipsNodes = createStarshipsNodes(starships);
    initialNodes.push(...starshipsNodes);
  }

  // condition if starships array exist and not empty array - create nodes and push them to resulting variable

  if (films && films.length) {
    const filmsNodes = createFilmsNodes(films);
    const filmsEdges = createFromOneToManyEdges('hero', 'film', films);
    initialNodes.push(...filmsNodes);
    initialEdges.push(...filmsEdges);
  }

  // condition if films array exist and not empty array - create nodes and edges to hero (hero always only one) and push them to resulting variables

  if (starships && starships.length && films && films.length) {
    // condition we have both starships and fims arrays and they are not empty

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

      // iteration through films to connect every film with starships present in the film.
    }
  }

  // returning object with two properties - initialNodes, initialEdges - array of nodes and edges respectively

  return { initialNodes, initialEdges };
};
