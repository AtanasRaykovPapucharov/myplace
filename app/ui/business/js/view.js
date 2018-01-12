const view = {
	books: (selectorId, data) => {
		return templateLoader.load(selectorId, './templates/books.html', data)
	},
	games: (selectorId, data) => {
		return templateLoader.load(selectorId, './templates/games.html', data)
	},
	sports: (selectorId, data) => {
		return templateLoader.load(selectorId, './templates/sports.html', data)
	},
	movies: (selectorId, data) => {
		return templateLoader.load(selectorId, './templates/movies.html', data)
	},
	music: (selectorId, data) => {
		return templateLoader.load(selectorId, './templates/music.html', data)
	},
	writing: (selectorId, data) => {
		return templateLoader.load(selectorId, './templates/writing.html', data)
	},
	survivor: (selectorId, data) => {
		return templateLoader.load(selectorId, './templates/survivor.html', data)
	},
	addnew: (selectorId, data) => {
		return templateLoader.load(selectorId, './templates/addnew.html', data)
	},
	singleObject: (selectorId, data) => {
		return templateLoader.load(selectorId, './templates/object-single.html', data)
	}
}