module.exports = (mongo, nodemailer, params) => {
	const collection = { USERS: 'users', BLOGS: 'blogs', GAMES: 'games' };
	const collectionData = require('./service/collections-data-api')(mongo);
	
	const blog = require('./service/collections')(collectionData, collection.BLOGS);
	const game = require('./service/collections')(collectionData, collection.GAMES);
	const blogData = require('./service/collections-data')(collectionData, collection.BLOGS);
	const gamesData = require('./service/collections-data')(collectionData, collection.GAMES);

	return {
		blog, game, blogData, gamesData
	}
}