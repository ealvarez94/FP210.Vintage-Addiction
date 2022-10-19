var querystring = require("querystring");
var fs = require("fs");
var userRegisters= new Array();


function init(response){

    console.log("Request handler 'init' has been called");
   
    fs.readFile("./vistas/home.html", function(err, data){
        if(err){
            throw err;
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    })
}

function validatedRegister(response, postData){

    console.log("Request handler 'validatedRegister' has been called");
    var myJSON = JSON.parse(postData);
    if(postData){
        var objectUser = {
            "username": myJSON.username,
            "password": myJSON.password,
            "name": myJSON.name,
        }
        console.log("El usuario registrado es:", objectUser)
        userRegisters.push(objectUser);
        //clean post data avoid duplicate records
        postData="";
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end();
    } 
}

function login(response, postData){
    console.log("Request handler 'login' has been called");
    var myJson= JSON.parse(postData);
    var username= myJson.username;
    var password = myJson.password;
    var item = userRegisters.find(item => item.username === username);
    console.log("El item encontrado es", item)
    if(item !== undefined){
        if(item.username === username && item.password === password){
            console.log("puede logearse")
            response.writeHead(200, {"Content-Type": "text/html"});
            response.end();
            }
            
        
        if(item.username === username && item.password !== password){
            //PASSWORD INCORRECT
            console.log("no puede logearse password incorrecta")
            response.writeHead(404, {"Content-Type": "text/html"});
            response.end();
        }    
    }

    if(item === undefined){
        //USER DOESN'T EXISTS
        console.log("no puede logearse usuario no registrado")
        response.writeHead(404, {"Content-Type": "text/html"});
        response.end();
    }
}

function register(response){
    console.log("Request handler register has been called")
    fs.readFile("./vistas/register.html", function(err, data){
        if(err){
            throw err;
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    })
    
}
function gameApp(response){
    fs.readFile("./vistas/game-app.html", function(err, data){
        if(err){
            throw err;
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    })
}


function serveImg(response, postData ,idpath){
    
    let img ="./assets/avatars/guerrera.png"
    if(idpath === "2"){
        img="./assets/avatars/guerrero.png"
    }
    if(idpath === "3"){
        img="./assets/avatars/arquera.png"
    }
    if(idpath === "4"){
        img="./assets/avatars/arquero.png"
    }
    if(idpath === "5"){
        img="./assets/avatars/maga.png"
    }
    if(idpath === "6"){
        img="./assets/avatars/mago.png"
    }
    if(idpath === "7"){
        img="./assets/avatars/monstrua.png"
    }
    if(idpath === "8"){
        img="./assets/avatars/monstruo.png"
    }
    fs.readFile(img, function(err, data){
        if(err){
            console.log(err)
            throw err;
        }
        
        response.writeHead(200, {"Content-Type": "image/jpeg"});
        response.write(data);
        response.end();
    })
}  
    

exports.init = init;
exports.login = login;
exports.register = register;
exports.validatedRegister = validatedRegister;
exports.gameApp = gameApp;
exports.serveImg = serveImg;



    
    