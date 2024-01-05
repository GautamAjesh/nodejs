const http = require('http')
 

http.createServer((req, res) => {
    res.write('<h1>Hello World, this is server demo</h1>')
    res.end()
}).listen(8080, (error) => {
    if(error){
        console.log("Error is happened, try again");
    }else{
        console.log("server is running on port 8080");
    }
});
 
