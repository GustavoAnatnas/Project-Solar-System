import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <h1>Sistema Solar</h1>
        <Title headline="Planetas" />
        <div>
          {planets.map((planet) => (<PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
