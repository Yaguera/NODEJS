const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('welcome to our homepage')
    }else if(req.url === '/about'){
        res.end('Here is the about page')
    }else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page yoou looking for</p>
            <a href="/"> back home </a>
        `)  
    }
})

server.listen(5000);