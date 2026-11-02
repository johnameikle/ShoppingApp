import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const types = {".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".mjs":"text/javascript; charset=utf-8",".json":"application/json; charset=utf-8",".webmanifest":"application/manifest+json",".svg":"image/svg+xml"};

createServer(async (request,response)=>{
  try {
    const pathname=decodeURIComponent(new URL(request.url,"http://localhost").pathname);
    let file=normalize(join(root,pathname==="/"?"index.html":pathname.slice(1)));
    if(!file.startsWith(root))throw new Error("Invalid path");
    if((await stat(file)).isDirectory())file=join(file,"index.html");
    response.writeHead(200,{"Content-Type":types[extname(file)]||"application/octet-stream","Cache-Control":"no-store"});
    response.end(await readFile(file));
  } catch {
    response.writeHead(404,{"Content-Type":"text/plain"});response.end("Not found");
  }
}).listen(4173,"127.0.0.1",()=>console.log("Local: http://127.0.0.1:4173"));
