const constantz = require('./constants.json');

module.exports = {
	development: {
		db: constantz.mongodbConnection || 'mongodb://localhost:27017/appdb',
		port: 3333,
		nodemailerAppEmail: constantz.appEmail,
		nodemailerSubject: constantz.appSubject,
		nodemailerText: constantz.appTextEmail,
		nodemailerHtml:
		`<div>
			<h4>Click and confirm that you want to create an account on ShareIt.</h4> <br> <h5>This link will expire in fifteen minutes.</h5>
			<a href="`+ 'http://localhost:3333/#/signup-after' + `">Create account on ShareIt</a>
		</div>`,
		transporterConnectionString: constantz.transporterConnection,
		sessionSecret: 'session-secret',
		webTokenSecret: 'web-token-secret',
		cookieName: 'cookie-name'
	},
	production: {
		db: constantz.mongodbConnection,
		port: process.env.PORT,
		nodemailerAppEmail: constantz.appEmail,
		nodemailerSubject: constantz.appSubject,
		nodemailerText: constantz.appTextEmail,
		nodemailerHtml: constantz.htmlPartOne + this.port + constantz.htmlPartTwo,
		transporterConnectionString: process.env.SMTP_INFO,
		sessionSecret: process.env.SESSION_SECRET,
		webTokenSecret: process.env.WEB_TOKEN_SECRET,
		cookieName: process.env.COOKIE_NAME
	}
}
