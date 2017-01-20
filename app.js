import express from "express";
import router from "./controller";
import session from "express-session";
import {SERVER_CONFIG} from "./config";
import {l, createHTML} from "./utils";
express()
	.use(express.static("./static"))
	.use(session({
		secret: "house",
		resave: 1,
		saveUninitialized: 0,
		cookie: {
			maxAge: 3600000
		}
	}))
	.use(router)
	.listen(SERVER_CONFIG.port);