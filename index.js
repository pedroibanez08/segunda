const http=require('http');
const fs=require('fs');
const url=require('url');
//http.createServer(function(req,res){
var q=url.parse(req.url,true);
var filename="."+q.pathname;
//console.log(filename);

fs.readFile(filename,function(err,data){
if(err){
	res.writeHead(404,{'Content-type':'text/html;charset=utf-8'});
	return res.end('404 not found');
}
res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
res.write(data);
console.log(res.end());
return res.end();

});


//}).listen();
