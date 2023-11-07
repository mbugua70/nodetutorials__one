
// http module

const http  = require('http')

const server = http.createServer((req, res) =>{
    // console.log(req)
//  res.write("Welcome to my first node js app")
//  res.end()

// using req

   if(req.url === '/'){
    res.end("Welcome to my home page node js app")
   }
   if(req.url === '/about'){
    res.end("this is the about page")
   }
   res.end(
    `
    <h4>Opps!</h4>
    <p>The page you are looking for cannot be found</p>
    <a href = "/"> Home </a>
    `
   )
})

server.listen(5000)


// url property gonna tell us which address/endpoint the user is waiting
