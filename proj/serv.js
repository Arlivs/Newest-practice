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


const http = require("http")
const url = require("url")
const { parse } = require("querystring")

http.createServer((request, response) => {
    console.log('server work');
    if (request.method == 'GET') {
        console.log(request.method);
        let urlRequest = url.parse(request.url, true);

        console.log(urlRequest.query.test)
        if (urlRequest.query.test % 2 == 0) response.end('even')
        else response.end('odd')
    }
    else {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            console.log(body);
            let params = parse(body);
            console.log(params);
            console.log(params.hi);
            response.end('ok');
        });
    }

}).listen(3000);