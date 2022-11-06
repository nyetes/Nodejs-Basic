// const Person = require('./person');
// const person1 = new Person('Nites', 22);
// person1.greeting();

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if  (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'),
    //      (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, {'content-type': 'test/html'});
    //         res.end(content);
    //     }
    //     );
    // }
    // if  (req.url === '/api/users') {
    //     const users = [
    //         { name: 'Nites',age: 22},
    //         { name:'maharjan',age: 24}
    //     ];
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     res.end(JSON.stringify(users));
    
    // }

// Building file path
    let filePath = path.join(__dirname, 
        'public', req.url === '/' ? 'inde.html' : req.url);
        // console.log(filePath);
        // res.end();

    // Extension of file
    let extname = path.extname(filename);

    //Inital content type
    let contentType = 'text/html';
    
    //check ext and set content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
         case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'text/json';
            break;
        case '.png':
            contentType = 'text/png';
             break;
        case '.jpg':
            contentType = 'text/jpg';
            break;
    
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if(err.code == 'ENOENT') {
                //Page not found
                fs.readFile(path.join(__dirname), 'public', '404.html'), (err, content => {
                    res.writeHead(200, {'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                })
        } else {
                // some server error
                res.writeHead(500);
                res.end(`server error: ${err.code}`);
            }
         } else {
            // sucess
            res.writeHead(200, {'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));

