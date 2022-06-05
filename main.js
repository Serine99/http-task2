import http from "http";
import fs from "fs";
import path from "path";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(path.resolve("front/index.html")).pipe(res);
  } else if (req.url === "/style.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    fs.createReadStream(path.resolve("front/style.css")).pipe(res);
  } else if (req.url === "/js.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    fs.createReadStream(path.resolve("front/js.js")).pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Something went wrong. Data not found");
  }
});
server.listen(8000);

//  Advanced version

// const mimeType ={
//     ".html" : "text/html",
//     ".css" : "text/css",
//     ".js": "text/javascript"
// };
// function files  (req, res, next) {
//     let url = req.url;
//     if(url === "/"){
//         url = "/index.html"
//     }
// const filePath = path.resolve("front"+ url);
// fs.promises.access(filePath)
// .then(()=>{
// const extname = path.extname(filePath)
//     res.writeHead(200, {'Content-Type': mimeType[extname]});
//     fs.createReadStream(filePath).pipe(res);

// })
// .catch(()=>{
//     next()
// })
// }
// const server = http.createServer((req, res)=>{
//     files(req,res, ()=>{
//         if (req.url !== "/"){
//      res.writeHead(404, {'Content-Type': 'text/plain'});
//      res.end("Something went wrong. Data not found")
//         }
//     }
//     )
// })
