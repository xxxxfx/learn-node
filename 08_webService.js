let http = require('http');
let fs = require('fs');
http.createServer((req, res) => {
  let pathname = req.url;
  if(pathname ==='/') {
    pathname = 'index.html';
  }
  if(pathname != "/favicon.ico") {
    console.log('路径名称：' , pathname);
    fs.readFile('./08_webService/'+ pathname, (err, data) => {
      if(err) {
        console.log('404 not found')
        fs.readFile('./08_webService/404.html', (errNotFound, dataNotFound) => {
          if(errNotFound) {
            console.log(errNotFound)
          } else {
            res.writeHead(200, {
              "Content-Type": "text/html; charset='utf-8'"
            });
            res.write(dataNotFound)
            res.end();
          }
        })
        return;
      } else {
        res.writeHead(200, {
          "Content-Type": "text/html; charset='utf-8'"
        })
        res.write(data);
        res.end();
      }
    })
  }
}).listen(8088);