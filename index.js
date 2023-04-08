var server = require("./server");import { init } from "./server";
var router = require("./router");import { route } from "./router";
var requestHandlers = require("./src/controlers/requestHandlers");import { init as _init, register, login, gameApp, validatedRegister, serveImg, ocupation, disconnect, ocupationcheck, logOut } from "./src/controlers/requestHandlers";

var handle = {};
handle["/"] = requestHandlers.init_init;
handle["/home"] =requestHandlers.init_init;
handle["/register"]=requestHandlers.registerregister;
handle["/login"]=requestHandlers.loginlogin;
handle["/game-app"]=requestHandlers.gameAppgameApp;
handle["/validated-register"]=requestHandlers.validatedRegistervalidatedRegister;
handle["/assets/avatars"]= requestHandlers.serveImgserveImg;
handle["/ocupation"]= requestHandlers.ocupationocupation;
handle["/disconnect"]= requestHandlers.disconnectdisconnect;
handle["/ocupationcheck"]= requestHandlers.ocupationcheckocupationcheck;
handle["/logOut"] = requestHandlers.logOutlogOut;

server.initinit(router.routeroute, handle);