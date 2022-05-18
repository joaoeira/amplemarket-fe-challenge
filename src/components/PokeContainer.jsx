
import { TextInput } from '@mantine/core';
import PokeCard from './PokeCard/PokeCard';


function Container() {
  return (
    <>
      <TextInput
      placeholder="Pokemon Name"
      label="Pokemon Name"
    />

    <div style={{  display: "grid", gridTemplateColumns: "auto auto auto",padding: "10px"}}>
      {/* <PokeCard pokemon={ poke} /> */}
    </div>
    </>
  );
}

export default Container;
