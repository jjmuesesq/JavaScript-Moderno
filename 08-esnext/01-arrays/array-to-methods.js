const heroes = ['Batman', 'Superman', 'Flash', 'Aquaman'];
// const heroesCopy = heroes;
// heroes.sort();


const deletedHero = heroes.toSpliced(0, 2, 'Green Lantern');
// const sortedHeores = heroes.toSorted();
// heroes.reverse();
// const reversedHeores = heroes.toReversed();

console.table(heroes);
// console.table(reversedHeores);
console.table({deletedHero}); 