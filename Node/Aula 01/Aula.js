var http = require ('http');

http.createServer((request,response) =>{
    var categoria = request.url;
    if (categoria == '/tecnologia'){
        response.end("<html><body>Tecnlogia</body></html>");
    }
    else if (categoria == '/moda'){
        response.end("<html><body>Moda</body></html>");
    }
   else if (categoria == '/teste'){
        response.end("<html><body>Teste 1</body></html>");
    } else {     
        response.end("<html><body>Teste</body></html>"); }
}).listen(8080);