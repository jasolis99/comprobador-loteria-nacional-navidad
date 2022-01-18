export default async function fetchResult(value) {
  return await fetch(`https://api.elpais.com/ws/LoteriaNavidadPremiados?n=${value}`)
    .then((result) => result.text())
    .then((result) => JSON.parse(result.slice(9)))
}
