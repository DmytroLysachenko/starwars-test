const { default: HeroCard } = require('@components/HeroCard');
const { hero } = require('@constants/testingConstants');
const { render, screen } = require('@testing-library/react');

describe('HeroCard component', () => {
  it('should navigate to proper SingleHero page when link is clicked', () => {
    render(<HeroCard hero={hero} />);
    const link = screen.getByText('Check out details');
    expect(link.hasAttribute('href', '/heroes/1'));
  });
});
