/**
 * @returns {Promise<Object>} quote information 
 */
const fetchQoute = async() => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
    console.log(data[0]);
    return data[0];
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async(element ) => {
    // console.log('Hola mundo');
    document.querySelector('#app-title').innerHTML = 'Breakingbad App'
    element.innerHTML = 'Loading...';
    
    const quote = await fetchQoute();
    element.innerHTML = 'Tenemos data!!';
}