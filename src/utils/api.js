export async function getPokemonData(count = 12) {
  try {
    const responses = await Promise.all(
      Array.from({ length: count }, (_, i) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
      )
    );

    const data = await Promise.all(
      responses.map((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
    );

    return data.map((poke) => ({
      id: poke.id,
      name: poke.name,
      imageUrl: poke.sprites.other['official-artwork'].front_default,
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
