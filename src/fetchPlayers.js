export async function fetchPlayers(player) {
  const res = await fetch(
    `https://sportscore1.p.rapidapi.com/players/search?sport_id=1&name=${player}`,
    {
      method: "POST",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_P_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_PU_KEY,
      },
    }
  );
  const data = await res.json();
  return data;
}
