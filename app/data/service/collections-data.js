module.exports = (dataApi, collectionName) => {
	return {
		getAll: () => {
			return dataApi.getAll(collectionName)
				.then((data) => {
					return data;
				})
				.catch((err) => {
					return { error: err }
				});
		},
		getById: () => {
			return dataApi.getOneById(collectionName, req.params.id)
				.then((data) => {
					return data;
				})
				.catch((err) => {
					return { error: err }
				});
		},
		getByTag: () => {
			return dataApi.getOneByTag(collectionName, req.params.tag)
				.then((data) => {
					return data;
				})
				.catch((err) => {
					return { error: err }
				});
		}
	}
}