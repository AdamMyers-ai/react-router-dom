const PokeUrl = "https://pokeapi.co/api/v2/pokemon/";

// show all pokemon
export const index = async () => {
  try {
    const response = await fetch(PokeUrl);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error fetching pokemon:", error);
  }
};

// show one pokemon
export const show = async (id) => {
  try {
    const response = await fetch(`${PokeUrl}${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error fetching pokemon:", error);
  }
};

// export { index, show };
