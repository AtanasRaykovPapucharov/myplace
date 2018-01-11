$(() => {
    const appRouter = new Navigo(null, true)
    appRouter
        .on({
            '/books': () => {
                return view.books('#content-block');
            },
            '/music': () => {
                return view.music('#content-block');
            },
            '/games': () => {
                return view.games('#content-block');
            },
            '/movies': () => {
                return view.movies('#content-block');
            },
            '/writing': () => {
                return view.writing('#content-block');
            },
            '/sports': () => {
                return view.sports('#content-block');
            },
            '/survivor': () => {
                return view.survivor('#content-block');
            },
            '*': () => {
                appRouter.navigate('/')
            }
        })
        .notFound(() => {
            alert('Error! Router not found!')
        })
        .resolve()
})