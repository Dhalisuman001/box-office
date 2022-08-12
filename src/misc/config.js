const API_URL = 'https://api.tvmaze.com';

export async function getApi(searchQuary) {
    const response = await fetch(`${API_URL}${searchQuary}`).then(r => r.json());
    return response;
}
    // fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(r => r.json()).then(result => {
    //     console.log(result);
    //     setResult(result);