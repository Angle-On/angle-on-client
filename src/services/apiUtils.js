
export const getCharacters = async () => { 
  const res = await 
  fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
  
  const characters = await res.json();
  console.log(characters);
  
  return characters.map(character => ({
    id: character._id,
    name: character.name,
    image: character.image
  
  }));
};
