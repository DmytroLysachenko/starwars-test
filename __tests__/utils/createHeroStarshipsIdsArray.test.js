const { starships } = require('@constants/testingConstants');
const {
  createHeroStarshipsIdsArray,
} = require('@utils/createHeroStarshipsIdsArray');

describe('createHeroStarshipsIdsArray', () => {
  it('returns an array of unique starship IDs associated with the hero', () => {
    const hero = {
      films: ['film1', 'film2'],
      starships: ['starship1', 'starship2'],
    };
    const films = [
      { id: 'film1', starships: ['starship1', 'starship4'] },
      { id: 'film2', starships: ['starship2', 'starship3'] },
    ];

    const result = createHeroStarshipsIdsArray(hero, films);
    expect(result).toEqual(['starship1', 'starship2']);
  });

  it('returns an empty array if there are no starships associated with the hero', () => {
    const hero = {
      films: ['film3'],
      starships: ['starship4', 'starship5'],
    };
    const films = [
      { id: 'film1', starships: ['starship1', 'starship2'] },
      { id: 'film2', starships: ['starship2', 'starship3'] },
    ];

    const result = createHeroStarshipsIdsArray(hero, films);
    expect(result).toEqual([]);
  });

  it('returns an empty array if there are no starships in any film', () => {
    const hero = {
      films: ['film1', 'film2'],
      starships: ['starship1', 'starship2'],
    };
    const films = [
      { id: 'film1', starships: [] },
      { id: 'film1', starships: [] },
    ];

    const result = createHeroStarshipsIdsArray(hero, films);
    expect(result).toEqual([]);
  });

  it('returns an empty array if films array is empty', () => {
    const hero = {
      films: ['film1', 'film2'],
      starships: ['starship1', 'starship2'],
    };
    const films = [];

    const result = createHeroStarshipsIdsArray(hero, films);
    expect(result).toEqual([]);
  });
});
