module.exports = (dataApi, collectionName) => {
	return {
		getAll: (req, res, next) => {
			dataApi.getAll(collectionName)
				.then((obj) => {
					res.status(200).json(obj);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		getById: (req, res, next) => {
			dataApi.getById(collectionName, req.params.id)
				.then((obj) => {
					res.status(200).json(obj);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		getByTag: (req, res, next) => {
			dataApi.getByTag(collectionName, req.params.tag)
				.then((obj) => {
					res.status(200).json(obj);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		getByName: (req, res, next) => {
			dataApi.getByName(collectionName, req.params.tag)
				.then((obj) => {
					res.status(200).json(obj);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		post: (req, res, next) => {
			dataApi.post(collectionName, req.body)
				.then((obj) => {
					res.status(200).json(obj);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		comment: (req, res, next) => {
			const comment = req.body;

			dataApi.push(collectionName, req.params.id, comment)
				.then((obj) => {
					if (comment) {
						res.status(200).json({ comment: comment, message: 'success' });
					}
				})
				.catch((err) => {
					res.status(400).json({ error: err.message });
				});
		},
		like: (req, res, next) => {
			dataApi.likeOneById(collectionName, req.params.id)
				.then((resp) => {
					res.status(200).json(resp);
				})
				.catch((err) => {
					res.send(err);
				});
		}
	}
}