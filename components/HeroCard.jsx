import Image from 'next/image';

const HeroCard = ({ hero }) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{hero.name}</h2>
        <p>Gender: {hero.gender}</p>
        <p>Height: {hero.height} cm</p>
        <p>Mass: {hero.mass} kg</p>
        <p>Birth year: {hero.birth_year}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Check out details</button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
