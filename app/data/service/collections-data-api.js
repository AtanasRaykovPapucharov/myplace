module.exports = (mongo) => {
	const REQUESTER = require('../utils/dbRequester')(mongo);

	return {
		getAll: (collectionName) => {
			return REQUESTER.find(collectionName);
		},
		getOneById: (collectionName, id) => {
			return REQUESTER.findOne(collectionName, id);
		},
		getOneByTag: (collectionName, tag) => {
			return REQUESTER.findOne(collectionName, { tags: tag });
		},
		getOneByName: (collectionName, name) => {
			return REQUESTER.findOne(collectionName, { name: name });
		},
		postOne: (collectionName, blog) => {
			return REQUESTER.save(collectionName, blog);
		},
		pushOne: (collectionName, id, dataObj) => {
			let updateObj = { $push: dataObj };
			return REQUESTER.update(collectionName, id, updateObj);
		},
		setOne: (collectionName, id, dataObj) => {
			let updateObj = { $set: dataObj };
			return REQUESTER.update(collectionName, id, updateObj);
		},

		pushOneComment: (collectionName, id, comment) => {
			let updateObj = { $push: { comments: comment }, $inc: { commentsCount: 1 } }
			return REQUESTER.update(collectionName, id, updateObj);
		},
		likeOneById: (collectionName, id) => {
			return REQUESTER.findAndModify(collectionName, id, { $inc: { likes: 1 } });
		}
	}
}