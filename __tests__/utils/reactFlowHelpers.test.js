import {
  createFilmsNodes,
  createFromOneToManyEdges,
  createInitialData,
  createStarshipsNodes,
} from '@/utils/reactFlowHelpers';

describe('createStarshipsNodes', () => {
  it('creates nodes for each starship with the correct structure', () => {
    const starships = [
      { id: '1', name: 'X-Wing' },
      { id: '2', name: 'TIE Fighter' },
    ];
    const result = createStarshipsNodes(starships);

    expect(result).toEqual([
      {
        id: 'starship-1',
        data: { label: 'X-Wing' },
        position: { x: 100, y: 500 },
      },
      {
        id: 'starship-2',
        data: { label: 'TIE Fighter' },
        position: { x: -200, y: 500 },
      },
    ]);
  });

  it('returns an empty array when no starships are provided', () => {
    const result = createStarshipsNodes([]);
    expect(result).toEqual([]);
  });
});

describe('createFilmsNodes', () => {
  it('creates nodes for each film with the correct structure', () => {
    const films = [
      { id: '1', title: 'A New Hope' },
      { id: '2', title: 'The Empire Strikes Back' },
    ];
    const result = createFilmsNodes(films);

    expect(result).toEqual([
      {
        id: 'film-1',
        data: { label: 'A New Hope' },
        position: { x: 100, y: 200 },
      },
      {
        id: 'film-2',
        data: { label: 'The Empire Strikes Back' },
        position: { x: -200, y: 200 },
      },
    ]);
  });

  it('returns an empty array when no films are provided', () => {
    const result = createFilmsNodes([]);
    expect(result).toEqual([]);
  });
});

describe('createFromOneToManyEdges', () => {
  it('creates edges for each element with the correct structure', () => {
    const array = [{ id: '1' }, { id: '2' }];
    const result = createFromOneToManyEdges('hero', 'starship', array);

    expect(result).toEqual([
      { id: 'hero-starship-1', source: 'hero', target: 'starship-1' },
      { id: 'hero-starship-2', source: 'hero', target: 'starship-2' },
    ]);
  });

  it('returns an empty array when the input array is empty', () => {
    const result = createFromOneToManyEdges('hero', 'starship', []);
    expect(result).toEqual([]);
  });
});

describe('createInitialData', () => {
  it('creates initial nodes and edges correctly with hero, films, and starships', () => {
    const hero = { name: 'Luke Skywalker' };
    const films = [
      { id: '1', title: 'A New Hope', starships: ['1'] },
      { id: '2', title: 'The Empire Strikes Back', starships: ['2'] },
    ];
    const starships = [
      { id: '1', name: 'X-Wing' },
      { id: '2', name: 'TIE Fighter' },
    ];

    const result = createInitialData(hero, films, starships);

    expect(result).toEqual({
      initialNodes: [
        {
          id: 'hero',
          data: { label: 'Luke Skywalker' },
          position: { x: 0, y: 0 },
        },
        {
          id: 'starship-1',
          data: { label: 'X-Wing' },
          position: { x: 100, y: 500 },
        },
        {
          id: 'starship-2',
          data: { label: 'TIE Fighter' },
          position: { x: -200, y: 500 },
        },
        {
          id: 'film-1',
          data: { label: 'A New Hope' },
          position: { x: 100, y: 200 },
        },
        {
          id: 'film-2',
          data: { label: 'The Empire Strikes Back' },
          position: { x: -200, y: 200 },
        },
      ],
      initialEdges: [
        { id: 'hero-film-1', source: 'hero', target: 'film-1' },
        { id: 'hero-film-2', source: 'hero', target: 'film-2' },
        { id: 'film-1-starship-1', source: 'film-1', target: 'starship-1' },
        { id: 'film-2-starship-2', source: 'film-2', target: 'starship-2' },
      ],
    });
  });

  it('creates initial nodes correctly with no starships', () => {
    const hero = { name: 'Luke Skywalker' };
    const films = [
      { id: '1', title: 'A New Hope', starships: [] },
      { id: '2', title: 'The Empire Strikes Back', starships: [] },
    ];
    const starships = [];

    const result = createInitialData(hero, films, starships);

    expect(result).toEqual({
      initialNodes: [
        {
          id: 'hero',
          data: { label: 'Luke Skywalker' },
          position: { x: 0, y: 0 },
        },
        {
          id: 'film-1',
          data: { label: 'A New Hope' },
          position: { x: 100, y: 200 },
        },
        {
          id: 'film-2',
          data: { label: 'The Empire Strikes Back' },
          position: { x: -200, y: 200 },
        },
      ],
      initialEdges: [
        { id: 'hero-film-1', source: 'hero', target: 'film-1' },
        { id: 'hero-film-2', source: 'hero', target: 'film-2' },
      ],
    });
  });

  it('creates initial nodes correctly with no films', () => {
    const hero = { name: 'Luke Skywalker' };
    const films = [];
    const starships = [
      { id: '1', name: 'X-Wing' },
      { id: '2', name: 'TIE Fighter' },
    ];

    const result = createInitialData(hero, films, starships);

    expect(result).toEqual({
      initialNodes: [
        {
          id: 'hero',
          data: { label: 'Luke Skywalker' },
          position: { x: 0, y: 0 },
        },
        {
          id: 'starship-1',
          data: { label: 'X-Wing' },
          position: { x: 100, y: 500 },
        },
        {
          id: 'starship-2',
          data: { label: 'TIE Fighter' },
          position: { x: -200, y: 500 },
        },
      ],
      initialEdges: [],
    });
  });

  it('creates initial nodes correctly with no films and no starships', () => {
    const hero = { name: 'Luke Skywalker' };
    const films = [];
    const starships = [];

    const result = createInitialData(hero, films, starships);

    expect(result).toEqual({
      initialNodes: [
        {
          id: 'hero',
          data: { label: 'Luke Skywalker' },
          position: { x: 0, y: 0 },
        },
      ],
      initialEdges: [],
    });
  });
});
