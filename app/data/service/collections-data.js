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
			return dataApi.getById(collectionName, req.params.id)
				.then((data) => {
					return data;
				})
				.catch((err) => {
					return { error: err }
				});
		},
		getByTag: () => {
			return dataApi.getByTag(collectionName, req.params.tag)
				.then((data) => {
					return data;
				})
				.catch((err) => {
					return { error: err }
				});
		},
		getByName: () => {
			return dataApi.getByName(collectionName, req.params.name)
				.then((data) => {
					return data;
				})
				.catch((err) => {
					return { error: err }
				});
		}
	}
}