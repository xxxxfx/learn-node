let http = require('http');
let items = [];
;
http.createServer((req,res)=> {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  // 允许跨域的方式
  res.setHeader('Content-Type', 'application/json');
  // 判断请求
  switch(req.method) {
    case 'OPTIONS': 
    res.statusCode = 200;
    res.end();
    break;
    case 'GET':
      let data = JSON.stringify(items);
      res.write(data);
      res.end();
      break;
      case 'POST':
        let item = '';
        req.on('data',(chunk) => {
          item+=chunk;
        })
        req.on('end',()=>{
          item = JSON.stringify(item);
          items.push(item);
          console.log('hhhhh', items)
          let data = JSON.stringify(items);
          res.write(data);
          res.end();
        })
        break;

  }
}).listen(3000)
console.log('http server is start...');