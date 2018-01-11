module.exports = (dataApi, collectionName) => {
	return {
		getAll: (req, res, next) => {
			dataApi.getAll(collectionName)
				.then((blogs) => {
					res.status(200).json(blogs);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		getById: (req, res, next) => {
			dataApi.getOneById(collectionName, req.params.id)
				.then((blog) => {
					res.status(200).json(blog);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		getByTag: (req, res, next) => {
			dataApi.getOneByTag(collectionName, req.params.tag)
				.then((blog) => {
					res.status(200).json(blog);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		post: (req, res, next) => {
			dataApi.postOne(collectionName, req.body)
				.then((blog) => {
					res.status(200).json(blog);
				})
				.catch((err) => {
					res.send(err);
				});
		},
		comment: (req, res, next) => {
			const comment = req.body;

			dataApi.pushOneComment(collectionName, req.params.id, comment)
				.then((comment) => {
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