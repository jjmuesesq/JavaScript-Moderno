const superHeroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    },
    {
        id: 3,
        name: 'Flash'
    },
    {
        id: 4,
        name: 'Aquaman'
    },
];

// const superHeroesCopy = [...superHeroes];

// tambien es valido
const array2 = JSON.parse(JSON.stringify(superHeroes));
const superHeroesCopy = structuredClone(superHeroes);


//objetos pasados por referencia
//si se pasan primitivos funciona bien la copia
superHeroesCopy[0].name = 'Green Lantern'; 
array2[0].name = 'Green'; 
console.table( superHeroes );
console.table( superHeroesCopy );
console.table(array2);