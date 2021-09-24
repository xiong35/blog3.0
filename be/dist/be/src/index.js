"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const KoaBody = require("koa-body");
const logger = require("koa-logger");
const cors = require("@koa/cors");
const useHandleError_1 = require("./middleware/useHandleError");
const models_1 = require("./models");
const router_1 = require("./router");
(0, models_1.setupMongo)();
const app = new Koa();
app
    .use(logger())
    .use(cors({
    origin: "*",
    allowMethods: "*",
    allowHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    exposeHeaders: "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Cache-Control, Content-Language, Content-Type",
    credentials: true,
}))
    .use((0, useHandleError_1.default)())
    .use(KoaBody())
    .use(router_1.default.routes());
app.listen(3012);
console.log("listen on 3012");
