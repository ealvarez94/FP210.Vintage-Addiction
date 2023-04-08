
//SERVIDOR HTTP BASICO
//inicio del servidor

import { createServer } from "http";
import { parse } from "url";


function init(route, handle){
    function onRequest(request, response){
        var pathname = parse(request.url).pathname;
        var idpath = parse(request.url).query;
        var postData = "";

        request.setEncoding("utf-8");
        request.addListener("data", function(textPost){
            postData += textPost;
            console.log("text post recived: " + textPost + ".");
        });

        request.addListener("end", function(){
            route(handle, pathname, response, postData, idpath);
        });

    }
    
    createServer(onRequest).listen(8888);
} 

const _init = init;
export { _init as init };