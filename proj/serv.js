const requestUrl = "https://jsonplaceholder.typicode.com/users";
function sendRequest(url, method, body = null) {
    return fetch(url)
    .then(resp => {
        if (resp.ok) return resp.json();
    })
}
// sendRequest(requestUrl)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
