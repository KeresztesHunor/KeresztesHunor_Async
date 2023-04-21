let lista = [];

$(() =>
{
    const ADATOK = "http://localhost:3000/adatLista";
    adatBetolt("adatok.json", adat =>
    {
        lista = adat.adatLista;
        console.log(lista);
    });
    const MAIN = $("main");
    for (let i = 1; i < 1011; i++)
    {
        adatBetolt(`https://pokeapi.co/api/v2/pokemon/${i}`, adat =>
        {
            $(MAIN).append(`
                <div>
                    <img src="${adat.sprites.front_default}" alt="${adat.name}">
                    <p>${adat.name}</p>
                </div>
            `);
        });
    }
});

function adatBetolt(vegpont, callback)
{
    fetch(vegpont)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.log(error));
}