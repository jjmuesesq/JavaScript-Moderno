/**
 * 
 * @param {HTMLDivElement} element 
 */

export const generatorFunctionsComponent = (element) => {
    console.log('generatorFunctionComponent');
    const myGenerator = myFirstGeneratorFunction();
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
}

function* myFirstGeneratorFunction () {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';
    return 'Ya no hay valores';
}