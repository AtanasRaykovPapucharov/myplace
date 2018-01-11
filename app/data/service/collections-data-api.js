module.exports = (mongo) => {
	const REQUESTER = require('../utils/dbRequester')(mongo);

	return {
		getAll: (collectionName) => {
			return REQUESTER.find(collectionName);
		},
		getById: (collectionName, id) => {
			return REQUESTER.findOne(collectionName, id);
		},
		getByTag: (collectionName, tag) => {
			return REQUESTER.findOne(collectionName, { tags: tag });
		},
		getByName: (collectionName, name) => {
			return REQUESTER.findOne(collectionName, { name: name });
		},
		post: (collectionName, blog) => {
			return REQUESTER.save(collectionName, blog);
		},
		push: (collectionName, id, dataObj) => {
			let updateObj = { $push: dataObj };
			return REQUESTER.update(collectionName, id, updateObj);
		},
		set: (collectionName, id, dataObj) => {
			let updateObj = { $set: dataObj };
			return REQUESTER.update(collectionName, id, updateObj);
		},
		increase: (collectionName, id, increaseObj) => {
			return REQUESTER.findAndModify(collectionName, id, { $inc: increaseObj });
		},
		pushAndIncrease: (collectionName, id, pushObj, increaseObj) => {
			let updateObj = { $push: pushObj, $inc: increaseObj }
			return REQUESTER.update(collectionName, id, updateObj);
		}
	}
}