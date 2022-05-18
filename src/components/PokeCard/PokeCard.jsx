import { useState } from "react";
import './PokeCard.css'
  
const PokeCard = ({pokemon}) => {
    
  const id = pokemon.id 
  const name=pokemon.name
  const image= pokemon.sprites.other.dream_world.front_default
  const type=pokemon.types[0].type.name
  const height=pokemon.height
  const weight=pokemon.weight
  const stat1=pokemon.stats[0].stat.name
  const stat2=pokemon.stats[1].stat.name
  const stat3=pokemon.stats[2].stat.name
  const stat4=pokemon.stats[3].stat.name
  const stat5=pokemon.stats[4].stat.name
  const stat6=pokemon.stats[5].stat.name
  const bs1=pokemon.stats[0].base_stat
  const bs2=pokemon.stats[1].base_stat
  const bs3=pokemon.stats[2].base_stat
  const bs4=pokemon.stats[3].base_stat
  const bs5=pokemon.stats[4].base_stat
  const bs6=pokemon.stats[5].base_stat

  const style = `thumb-container ${type}`;
  const [show, setShow] = useState(false);

  return (
    <div className={style}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name.toUpperCase()}</h3>
        <small>Type : {type}</small>
        <Description
          weightpok={weight}
          heightpok={height}
          pokstat1={stat1}
          pokstat2={stat2}
          pokstat3={stat3}
          pokstat4={stat4}
          pokstat5={stat5}
          pokstat6={stat6}
          posbs1={bs1}
          posbs2={bs2}
          posbs3={bs3}
          posbs4={bs4}
          posbs5={bs5}
          posbs6={bs6}
        />
      </div>
    </div>
  );
};
  
export default PokeCard;
  
const Description = ({
  heightpok,
  weightpok,
  pokstat1,
  pokstat2,
  pokstat3,
  pokstat4,
  pokstat5,
  pokstat6,
  posbs1,
  posbs2,
  posbs3,
  posbs4,
  posbs5,
  posbs6,
}) => {
  return (
    <div className="desc">
      <p>
        <b>Height</b> is <b>{heightpok * 10} cm.</b>
      </p>
  
      <p>
        <b>Weight</b> is <b>{weightpok * 0.1} kg</b>
      </p>
  
      <h3>Stat</h3>
  
      <p>
        <b>
          {pokstat1} : {posbs1}
        </b>
      </p>
  
      <p>
        <b>
          {pokstat2} : {posbs2}
        </b>
      </p>
  
      <p>
        <b>
          {pokstat3} : {posbs3}
        </b>
      </p>
  
      <p>
        <b>
          {pokstat4} : {posbs4}
        </b>
      </p>
  
      <p>
        <b>
          {pokstat5} : {posbs5}
        </b>
      </p>
  
      <p>
        <b>
          {pokstat6} : {posbs6}
        </b>
      </p>
    </div>
  );
};
