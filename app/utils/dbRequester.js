module.exports = (mongo) => {
	function _get(method, collection, requirementsObj) {
		requirementsObj = requirementsObj || {};

		return new Promise((resolve, reject) => {
			mongo.db[collection][method](requirementsObj, (err, objs) => {
				if (err) {
					reject(err);
				}
				resolve(objs);
			})
		});
	}

	function _update(method, collection, requirementsObj, updates) {
		return new Promise((resolve, reject) => {
			mongo.db[collection][method](requirementsObj, updates, (err, objs) => {
				if (err) {
					reject(err);
				}
				resolve(objs);
			})
		});
	}

	return {
		findAll: (collection) => {
			return _get("find", collection)
		},
		findOne: (collection, requirementsObj) => {
			return _get("findOne", collection, requirementsObj)
		},
		findAndModify: (collection, requirementsObj) => {
			return _get("findAndModify", collection, requirementsObj)
		},
		save: (collection, obj) => {
			return _get("save", collection, obj)
		},
		update: (collection, requirementsObj, updates) => {
			return _update("update", collection, requirementsObj, updates)
		}
	}
};