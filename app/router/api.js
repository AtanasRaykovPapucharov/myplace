module.exports = (express, mongo, nodemailer, params) => {
	const data = require('../data')(mongo, nodemailer, params);
	return new express.Router()
		// .post('/users', controllers.userCtrl.newUser)
		// .put('/users', controllers.userCtrl.login)
		// .put('/users/image', controllers.userCtrl.imageUpdate)
		// .put('/users/change-password', controllers.userCtrl.changePassword)
		// .put('/users/forgot-password', controllers.userCtrl.forgotPassword)
		// .post('/users/contact-us', controllers.userCtrl.contactUs)

		.get('/blog', data.blog.getAll)
		.get('/blog/:id', data.blog.getById)
		.put('/blog/:tag', data.blog.getByTag)
		.post('/blog', data.blog.post)
		// .put('/blog/comment/:id', controllers.blog.comment)
		// .put('/blog/like/:id', controllers.blog.like)
		// .put('/blog/bookmark/:id', (req, res, next) => { })

		.get('/games', data.game.getAll)
		.get('/games/:id', data.game.getById)
		.put('/games/:tag', data.game.getByTag)
		.post('/games', data.game.post)
		// .put('/games/comment/:id', controllers.gameCtrl.commentsUpdate)
		// .put('/games/like/:id', controllers.gameCtrl.likeGame)
		// .put('/games/bookmark/:id', (req, res, next) => { })

	// .get('/tags', controllers.userCtrl.tags)
}
