module.exports = (express, app, params) => {
	const path = require("path");

	app.set("view engine", "pug");
	app.set("views", path.join(__dirname, "../views"));

	app.disable("x-powered-by");

	const cors = require("cors");
	app.use(cors());

	const cookieParser = require("cookie-parser");
	const bodyParser = require("body-parser");
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	const session = require("express-session");
	const sessionObj = {
		secret: params.sessionSecret,
		resave: true,
		saveUninitialized: true
	}
	app.use(session(sessionObj));

	app.use('/', express.static(path.join(__dirname, "../ui")));
}
