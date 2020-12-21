const http = require('http');

const server = http.createServer((req, res) => {
    
    const url =req.url;

    console.log("Joined !");
    if (url == "/profile")
    {
        res.setHeader('Content-Type', 'text/html');
        res.write("<p>this is the profile page ! </p>"); 
        return res.end();  /* Needed to make it stop listening */
    }

    res.setHeader('Content-Type', 'text/html');
    res.write("<p> Cheese burger ! </p>");  /* Render content on */
   
})

server.listen(3001);