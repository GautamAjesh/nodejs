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

const http=require('http');

http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify({
        name:'Ajesh Gautam',
        age: 21,
        address: 'Kathmandu',
        email:'gautamajesh151922@gmail.com',
        pincode: 44600
    }));
    res.end();
}).listen(8080);

console.log(process.argv[2]) // it is used to take input from terminal

const fs=require('fs');
const input=process.argv;
fs.writeFileSync(input[2], input[3]); // it is used to write in file
fs.unlinkSync('apple');

const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname, 'files');
for(i=0;i<10;i++){
    fs.writeFileSync(dirPath+"/hello"+i+".txt", "a simple text file"+i)
}

fs.readdir(dirPath,(err,files) =>{
    files.forEach((item)=>{
        console.log("file name is " +item);
    })
})

for(i=0;i<10;i++){
    fs.unlinkSync(dirPath+"/hello"+i+".txt", "a simple text file"+i)
}

